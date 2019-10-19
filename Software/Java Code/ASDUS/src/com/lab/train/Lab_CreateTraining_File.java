package com.lab.train;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 * 
 * This class creates the Training File(s) required for training the
 * domain-dependent model. For each file and each tag, it performs the
 * following:
 * 
 * 1. Calculate the header distance by invoking the web service hosted at python
 * end.
 * 
 * 2. Calculate the body distance by invoking the web service hosted at python
 * end.
 * 
 * 3. Calculate the length.
 * 
 * 4. Assign the label by checking with the gold version. Labels are:
 * 
 * Header = 0 Body = 1 Junk = 2
 * 
 * Then it creates a csv file with the training data.
 *
 */
public class Lab_CreateTraining_File {

	/**
	 * Web service url for obtaining header/title Distance
	 */
	static String strWebServiceHeaderDistance = "http://localhost:12008/score/header/";

	/**
	 * Web service url for obtaining Prose Distance
	 */
	static String strWebServiceBodyDistance = "http://localhost:12008/score/body/";

	/**
	 * Change this and pass the parent folder here.
	 * 
	 */
	static String strParentFolder = "C:\\ParentFolder\\";

	/**
	 * Change this and pass the appropriate train file name (Pass only the file
	 * name). All the files under the parent folder with this file name will be
	 * used for extracting the data.
	 */
	static String strTrainFileName = "priv.html";

	/**
	 * Change this and pass the appropriate gold file name (Pass only the file
	 * name). All the files under the parent folder with this file name will be
	 * used for labeling the data.
	 */
	static String strGoldFileName = "gold.html";

	/**
	 * This is the absolute path of the output training file.
	 */
	static String strOutputFile = "C:\\Lab_dom_dep_train_data.csv";

	public static void main(String[] args) throws Exception {

		List<String> listOfPolicies = com.lab.utils.FileFinder.findFiles(strParentFolder, strTrainFileName);

		File file = new File(strOutputFile);

		FileWriter fileWriter = null;
		BufferedWriter bufferedWriter = null;

		fileWriter = new FileWriter(file);
		bufferedWriter = new BufferedWriter(fileWriter);

		StringBuffer sb = new StringBuffer();

		sb.append("Header_Distance,Body_Distance,Length,Label\n");

		for (String strInput : listOfPolicies) {

			Set<String> Headers = load_Headers(strInput);

			Set<String> Body = load_Body(strInput);

			Document doc = Jsoup.parse(new File(strInput), "UTF-8");

			Elements elements = doc.body().select("*");

			for (Element element : elements) {

				try {
					String strOwnText = element.ownText().trim().toLowerCase();

					if (2 < strOwnText.length()) {

						String strHeaderDist = getTitleDistance(strOwnText);
						String strBodyDist = getBodyDistance(strOwnText);

						sb.append(strHeaderDist + "," + strBodyDist + "," + strOwnText.length() + ",");

						if (Headers.contains(strOwnText)) {
							sb.append("0");
						}

						else if (Body.contains(strOwnText)) {
							sb.append("1");
						}

						else {
							sb.append("2");
						}

						sb.append("\n");
					}
				} catch (Exception e) {
					System.out.println("Exception --> " + e.getMessage());
				}
			}

		}

		bufferedWriter.write(sb.toString());

		bufferedWriter.flush();
		fileWriter.flush();

		bufferedWriter.close();
		fileWriter.close();

	}

	/**
	 * This method is used to invoke the Body Distance web service hosted at
	 * python side. The output will be the semantic score between the given text
	 * and body embeddings.
	 * 
	 * @param strOwnText
	 * @return
	 */
	private static String getBodyDistance(String strOwnText) {
		String request = strOwnText;

		try {
			if (null != request && !"".equalsIgnoreCase(request) && request.length() > 2) {
				String url = strWebServiceBodyDistance;
				String charset = "UTF-8";
				String sentence = URLEncoder.encode(request, charset);
				// System.out.println("Sentence-->" + sentence);
				URLConnection connection = new URL(url + sentence).openConnection();
				connection.setRequestProperty("Accept-Charset", charset);
				InputStream response = connection.getInputStream();
				String responseBody;
				try (Scanner scanner = new Scanner(response)) {
					responseBody = scanner.useDelimiter("\\A").next();
				}
				responseBody = responseBody.trim();

				return responseBody;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Exception Encountered during Body Score");
			System.out.println(e.getMessage());
		}

		return "0";
	}

	/**
	 * This method is used to invoke the Header/Title Distance web service
	 * hosted at python side. The output will be the semantic score between the
	 * given text and title embeddings.
	 * 
	 * @param strOwnText
	 * @return
	 */
	private static String getTitleDistance(String strOwnText) {

		String request = strOwnText;

		try {
			if (null != request && !"".equalsIgnoreCase(request) && request.length() > 2) {
				String url = strWebServiceHeaderDistance;
				String charset = "UTF-8";
				String sentence = URLEncoder.encode(request, charset);
				// System.out.println("Sentence-->" + sentence);
				URLConnection connection = new URL(url + sentence).openConnection();
				connection.setRequestProperty("Accept-Charset", charset);
				InputStream response = connection.getInputStream();
				String responseBody;
				try (Scanner scanner = new Scanner(response)) {
					responseBody = scanner.useDelimiter("\\A").next();
				}
				responseBody = responseBody.trim();
				return responseBody;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Exception Encountered during Title Score");
			System.out.println(e.getMessage());
		}

		return "0";
	}

	/**
	 * This is a helper method to load the body of the HTML file.
	 * 
	 * @param strInput
	 * @return
	 * @throws Exception
	 */
	private static Set<String> load_Body(String strInput) throws Exception {
		Set<String> setBody = new HashSet<String>();

		strInput = strInput.replace(strTrainFileName, strGoldFileName);

		Document doc = Jsoup.parse(new File(strInput), "UTF-8");

		Elements elements = doc.body().select("p");

		for (Element element : elements) {

			try {
				String strOwnText = element.ownText().trim().toLowerCase();
				setBody.add(strOwnText);
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}
		}

		return setBody;
	}

	/**
	 * This is a helper method to load the titles/sectional headers of the HTML
	 * file.
	 * 
	 * @param strInput
	 * @return
	 */
	private static Set<String> load_Headers(String strInput) throws Exception {

		Set<String> setHeaders = new HashSet<String>();

		strInput = strInput.replace(strTrainFileName, strGoldFileName);

		Document doc = Jsoup.parse(new File(strInput), "UTF-8");

		Elements elements = doc.body().select("h2");

		for (Element element : elements) {

			try {
				String strOwnText = element.ownText().trim().toLowerCase();
				setHeaders.add(strOwnText);
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}
		}

		return setHeaders;
	}

	/**
	 * Helper method to remove the bullets present in sectional headers
	 * 
	 * @param strHeader
	 * @return
	 */
	public static String removeBullets(String strHeader) {

		if (strHeader.length() >= 6 && strHeader.contains(".")) {

			String strSeven = strHeader.substring(0, 6);
			String strRem = strHeader.substring(6, strHeader.length());

			if (strSeven.contains(".")) {

				return (strSeven.substring(strSeven.lastIndexOf(".") + 1, strSeven.length()) + strRem).trim();

			}
		}

		return strHeader;

	}
}
