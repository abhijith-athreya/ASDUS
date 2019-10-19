package com.lab.preprocess;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.lab.utils.FileFinder;

/**
 * This class extracts text from particular tags and dumps the collated text to
 * a given file. Change the Tag, Parent Folder, FileName and Results File in
 * order to customize the output.
 *
 */
public class ExtractTextFromTag {

	/**
	 * Entry Method.
	 * 
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {

		/**
		 * Change this and pass the parent folder here.
		 * 
		 */
		String strParentFolder = "C:\\ParentFolder";

		/**
		 * Change this and pass the appropriate test file name (Pass only the
		 * file name). All the files under the parent folder with this file name
		 * will be used for extracting the data.
		 */
		String strTestFileName = "dom_ind.html";

		List<String> listOfPolicies = FileFinder.findFiles(strParentFolder, strTestFileName);

		/**
		 * Change this and provide the absolute path of the desired output file.
		 */
		String strOutputFile = "C:\\Lab_Body.txt";

		/**
		 * Change this and provide the appropriate tag, whose data needs to be
		 * extracted.
		 */
		String strTagToExtract = "p";

		File file = new File(strOutputFile);

		FileWriter fileWriter = null;
		BufferedWriter bufferedWriter = null;

		fileWriter = new FileWriter(file);
		bufferedWriter = new BufferedWriter(fileWriter);

		StringBuffer sb = new StringBuffer();

		for (String strInput : listOfPolicies) {

			Document doc = Jsoup.parse(new File(strInput), "UTF-8");

			Elements elements = doc.body().select(strTagToExtract);

			for (Element element : elements) {

				try {
					String strOwnText = element.ownText().trim().toLowerCase();

					if (2 < strOwnText.length()) {

						sb.append(strOwnText + "\n");
					}
				} catch (Exception e) {
					System.out.println("Exception --> " + e.getMessage());
				}
			}

			// break;
		}

		bufferedWriter.write(sb.toString());

		bufferedWriter.flush();
		fileWriter.flush();

		bufferedWriter.close();
		fileWriter.close();

	}

	/**
	 * This method removes the bullet points of the text.
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
