package com.lab.model;

import java.awt.Desktop;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import weka.core.Stopwords;

/**
 * This is the main class which is responsible for generating the simple version
 * using the domain dependent approach.
 * 
 * It performs all the actions as described in the domain-dependent approach
 * section of the document.
 * 
 * To perform classification and to get labels, it invokes a web service hosted at
 * python end.
 * 
 * 
 *
 */
public class DomainDependentModel {

	static Set<String> setSkipTags = new HashSet<String>();

	static StringBuffer uncategorizedText = new StringBuffer();

	static int threshold_uncategorized = 40;

	static int int_header_label = 0;
	static int int_body_label = 1;
	static int int_junk_label = 2;

	static String strCue = "|-|";

	/**
	 * Web service url for obtaining header/title Distance
	 */
	static String strWebServiceHeaderDistance = "http://localhost:12008/score/header/";

	/**
	 * Web service url for obtaining Prose Distance
	 */
	static String strWebServiceBodyDistance = "http://localhost:12008/score/body/";

	/**
	 * Web service url for obtaining label of the text (Header/Body/Junk)
	 */
	static String strWebServiceClassifyText = "http://localhost:12009/predict/headerbody/";

	static {
		loadSkipTags();
	}
	
	/**
	 * Change this and pass the parent folder  which contains the HTMl files here.
	 * 
	 */
	static String strParentFolder = "C:\\ParentFolder";

	/**
	 * Change this and pass the appropriate test file name (Pass only the file
	 * name). All the files under the parent folder with this file name will be
	 * used for generating the dsimple version.
	 */
	static String strTestFileName = "priv.html";

	/**
	 * Change this and provide only desired name of the output file.
	 */
	static String strOutputFileName = "dom_dep.html";

	/**
	 * This is the Entry Method.
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {

		List<String> listOfPolicies = com.lab.utils.FileFinder.findFiles(strParentFolder, strTestFileName);

		boolean isLink = false;
		boolean isTempFile = false;
	
		for (String strInput : listOfPolicies) {
			createSimpleVersion_2(strInput, isLink, strOutputFileName, isTempFile, false);

		}

	}

	

	/**
	 * Use this method to generate the simple version by directly passing the
	 * URL (instead of a file).
	 * 
	 * @param url
	 * @return
	 * @throws Exception
	 */
	public static String parseurl(String url) throws Exception {

		String say = createSimpleVersion_2(url, true, "temp.html", true, true);

		File htmlFile = new File(say);
		Desktop.getDesktop().browse(htmlFile.toURI());

		return say;
	}

	/**
	 * This is the main worker method which creates the simple version.
	 * @param strInput
	 * @param isLink
	 * @param strOutput
	 * @param isTempFile
	 * @param onlyUnsupervised
	 * @return
	 * @throws Exception
	 */
	public static String createSimpleVersion_2(String strInput, boolean isLink, String strOutput, boolean isTempFile,
			boolean onlyUnsupervised) throws Exception {

		String strReplace = "\\" + strTestFileName;

		String loopVar = strInput.replace(strReplace, "");
		String websiteName = loopVar.substring(loopVar.lastIndexOf("\\") + 1);

		String strHTMLResultsFile;
		if (!isTempFile)
			strHTMLResultsFile = strInput.replace(strTestFileName, strOutput);
		else
			strHTMLResultsFile = "temp.html";

		String strFile = strInput;
		Document doc;

		if (!isLink)
			doc = Jsoup.parse(new File(strFile), "UTF-8");
		else
			doc = Jsoup.connect(strFile).get();

		Elements elements = null;

		int count = 0;

		// Perform the Initial Parse
		Map<String, String> map_top_down_parse = perform_top_down_parsing(doc);

		// Filter out Headers
		Set<String> set_Possible_headers = analyse_top_down_parse(map_top_down_parse);

	

		for (String strPossibleHeader : set_Possible_headers) {

			elements = doc.body().select(strPossibleHeader);

			for (Element element : elements) {

				if (element.ownText().trim().length() > 2) {
					// System.out.println(element.ownText().trim().replace("\n",
					// ""));
					element.attr("PossibleHeader", "Yes");
					count++;
				}
			}
		}

		File file = new File(strHTMLResultsFile);

		FileWriter fileWriter = null;
		BufferedWriter bufferedWriter = null;

		fileWriter = new FileWriter(file);
		bufferedWriter = new BufferedWriter(fileWriter);

		String htmlHeader = "<html><head><title> " + websiteName + "</title></head>";
		bufferedWriter.write(htmlHeader);

		String htmlBody = "<body style=’background-color:#ccc’><h1><center><u>" + websiteName + "</u></center></h1>";
		bufferedWriter.write(htmlBody);

	
		Elements elements_all = doc.body().select("*");

		StringBuffer sb = new StringBuffer();

		boolean in_header = false;
		String strcurrentheader = "";
		boolean last_reached = false;
		String str_last_String = "";

		String strUncategorized_1 = "";
		String strUncategorized_2 = "";

		boolean uncat_flag = false;
		int last_count = 0;

		for (Element element : elements_all) {

			String strOwnTrimmed = element.ownText().trim().replace("\n", "");

			if (last_reached && strOwnTrimmed.length() > 3) {

				if (last_count > 1 && !sentence_relates_to_last(strcurrentheader, str_last_String, strOwnTrimmed)) {
					break;
				} else {
					sb.append("<p> " + strOwnTrimmed + "</p>");
					str_last_String = str_last_String + strOwnTrimmed;
					last_count++;
				}
			}

			else if (null != element.attr("PossibleHeader") && "Yes".equals(element.attr("PossibleHeader"))) {
				in_header = true;
				String text = strOwnTrimmed;
				// sb.append("\n");
				sb.append("</hr>");
				if (uncat_flag) {
					sb.append("<h3>" + "Uncategorized" + "</h3>");
					sb.append("<p> " + strUncategorized_1 + "</p>");
					sb.append("<p> " + strUncategorized_2 + "</p>");
					uncat_flag = false;
				}
				sb.append("<h2>" + text + "</h2>");
				// sb.append(text);
				// sb.append("\n");
				count--;
				strcurrentheader = text;
				continue;

			}

			else if (in_header) {

				if (count != 0 && 10 < strOwnTrimmed.length()) {
					sb.append("<p> " + strOwnTrimmed + "</p>");
					// sb.append("\n");
				}

				else if (count == 0 && 10 < strOwnTrimmed.length()) {
					String last_text = strOwnTrimmed;
					sb.append("<p> " + last_text + "</p>");
					// sb.append("\n");
					// sb.append("\n");
					// System.out.println("Warning: Truncation could have
					// happened");
					last_reached = true;
					str_last_String = last_text;
				}
			}

			// Initial Case
			else {

				if (20 < strOwnTrimmed.length()) {

					strUncategorized_1 = strUncategorized_2;
					strUncategorized_1 = strOwnTrimmed;
					uncat_flag = true;
				}

			}
		}

		// System.out.println(sb);
		bufferedWriter.append(sb);

		bufferedWriter.flush();
		fileWriter.flush();

		bufferedWriter.close();
		fileWriter.close();

		return strHTMLResultsFile;
	}

	

	/**
	 * This method checks of the previous text is semantically related to the
	 * current text.
	 * 
	 * @param map_top_down_parse
	 * @return
	 */
	public static Set<String> analyse_top_down_parse(Map<String, String> map_top_down_parse) {

		String prev_text = "";
		String prev_address = "";

		Set<String> setPossibleCandidates = new HashSet<String>();
		Set<String> setPossibleTexts = new HashSet<String>();

		for (Map.Entry<String, String> entry : map_top_down_parse.entrySet()) {
			// System.out.println("_______________________________________");
			// System.out.println(entry.getKey() + " = " + entry.getValue());

			String strKey = entry.getKey().substring(0, entry.getKey().lastIndexOf(strCue));

			if (canthisbematched2(prev_text, strKey)) {

				setPossibleTexts.add(prev_text);
				setPossibleCandidates.add(prev_address);
			}

			prev_address = entry.getValue();
			prev_text = strKey;
		}

		// System.out.println(setPossibleCandidates);
		// System.out.println(setPossibleTexts);

		return setPossibleCandidates;
	}

	

	/**
	 * This method calculates the unigram overlap of two texts.
	 * @param prev_text
	 * @param current_text
	 * @return
	 */
	public static boolean canthisbematched2(String prev_text, String current_text) {

		prev_text = removebullets(prev_text);

		if (null != prev_text && int_header_label == getLabel(prev_text) && 100 < current_text.length()) {

			current_text = current_text.replaceAll("\"", "");

			current_text = current_text.replaceAll("'", "");

			// System.out.println("Prev -- " + prev_text);
			// System.out.println("Current -- " + current_text);

			prev_text = prev_text.toLowerCase();
			Set<String> prev_text_stemmed = new HashSet<String>();
			for (String word : prev_text.split(" ")) {

				prev_text_stemmed.add(com.lab.utils.Stemmer.stem(word));

			}
			// Remove Stop Words
			Set<String> prev_text_stemmed_stop_removed = new HashSet<String>();
			for (String word : prev_text_stemmed) {
				if (!Stopwords.isStopword(word))
					prev_text_stemmed_stop_removed.add(word);
			}

			Set<String> curr_text_stemmed = new HashSet<String>();
			for (String word : current_text.split(" ")) {

				curr_text_stemmed.add(com.lab.utils.Stemmer.stem(word));

			}

			// Remove Stop Words
			Set<String> curr_text_stemmed_stop_removed = new HashSet<String>();
			for (String word : curr_text_stemmed) {
				if (!Stopwords.isStopword(word))
					curr_text_stemmed_stop_removed.add(word);
			}

			int pre_size = prev_text_stemmed_stop_removed.size();

			if (pre_size == 0) {
				prev_text_stemmed_stop_removed = prev_text_stemmed;
				pre_size = prev_text_stemmed.size();
			}

			prev_text_stemmed_stop_removed.removeAll(curr_text_stemmed_stop_removed);

			int post_size = prev_text_stemmed_stop_removed.size();

			double golden_ratio = (double) post_size / pre_size;

			if (golden_ratio <= 0.25) {
				return true;
			}
		}
		return false;

	}

	/**
	 * This method invoked different web services and obtains the label of the
	 * given text.
	 * 
	 * @param prev_text
	 * @return
	 */
	private static int getLabel(String prev_text) {

		prev_text = prev_text.toLowerCase().trim();

		Integer length_ = prev_text.length();
		Double header_dist = getTitle_dist(prev_text);
		Double body_dist = getbody_dist(prev_text);

		return classifyGetLabel(header_dist.toString(), body_dist.toString(), length_.toString());

	}

	/**
	 * This method is used to invoke the deep neural network classifier at
	 * python end to get the label of the given text.
	 * 
	 * @param string
	 * @param string2
	 * @param string3
	 * @return
	 */
	private static int classifyGetLabel(String string, String string2, String string3) {

		String request = string + "|" + string2 + "|" + string3;

		try {
			if (null != request && !"".equalsIgnoreCase(request) && request.length() > 2) {
				String url = strWebServiceClassifyText;
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
				return Integer.parseInt(responseBody);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Exception Encountered during Predict");
			System.out.println(request);
		}

		return 2;
	}

	/**
	 * This method is used to invoke the Body Distance web service hosted at
	 * python side. The output will be the semantic score between the given text
	 * and body embeddings.
	 * 
	 * @param strOwnText
	 * @return
	 */
	private static double getbody_dist(String prev_text) {
		String request = prev_text;

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
				responseBody = responseBody.trim().replace("[", "").replace("]", "").trim();

				return Double.parseDouble(responseBody);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Exception Encountered during Body Dist");
			System.out.println(e.getMessage());
		}

		return 0;
	}

	/**
	 * This method is used to invoke the Header/Title Distance web service
	 * hosted at python side. The output will be the semantic score between the
	 * given text and title embeddings.
	 * 
	 * @param strOwnText
	 * @return
	 */
	private static double getTitle_dist(String prev_text) {

		String request = prev_text;

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
				responseBody = responseBody.trim().replace("[", "").replace("]", "").trim();

				return Double.parseDouble(responseBody);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Exception Encountered during Header Dist");
			System.out.println(e.getMessage());
		}

		return 0;
	}

	/**
	 * This is a helper method to remove bullets from titles/headers.
	 * 
	 * @param prev_text
	 * @return
	 */
	public static String removebullets(String prev_text) {

		prev_text = prev_text.trim();

		if (null != prev_text && 4 < prev_text.length() && prev_text.substring(0, 5).contains(".")) {

			prev_text = prev_text.substring(prev_text.indexOf(".") + 1, prev_text.length()).trim();

		}

		return prev_text;
	}

	/**
	 * This method loads the dictionary with all elements and their xpaths.
	 * 
	 * @param doc
	 * @return
	 */
	public static Map<String, String> perform_top_down_parsing(Document doc) throws Exception {

		int count = 0;

		Map<String, String> map = new LinkedHashMap<String, String>();

		Elements elements_all = doc.body().select("*");

		for (Element element : elements_all) {

			String strOwnTrimmed = element.ownText().toLowerCase().trim().replace("\n", "").replace("  ", " ");

			String strTag = element.tagName().toLowerCase().trim();

			int length_Own_Text = strOwnTrimmed.length();

			if (!setSkipTags.contains(strTag) && 3 < length_Own_Text) {

				count++;

				String strTemp_Sign = getParents(element);

				map.put(strOwnTrimmed + strCue + count, strTemp_Sign);

			}

		}

		return map;
	}

	/**
	 * This method returns the count of the stop words in the given text.
	 * 
	 * @param ownText
	 * @return
	 */
	public static int getStopWords(String ownText) {

		int count = 0;

		for (String word : ownText.split(" ")) {

			count = Stopwords.isStopword(word) ? ++count : count;

		}

		return count;
	}

	
	/**
	 * This method fetches the xpaths of headers/titles.
	 * @param element
	 * @return
	 */
	public static String getSomePatterns(Element element) {

		

		int count = 0;
		Element prev_sibling = null;

		while (true) {

			if (count == 0)
				prev_sibling = element.previousElementSibling();
			else {
				count++;
				prev_sibling = prev_sibling.previousElementSibling();
			}

			

			if (null == prev_sibling)
				break;

			String strTextTrimmed = prev_sibling.text().trim().replace("\n", "");

			int length_Text = strTextTrimmed.length();

			if (5 < length_Text && 160 > length_Text) {

				

				String strPrevOwnTextTrimmed = prev_sibling.ownText().trim().replace("\n", "");

				int length_prev_own_Text = strPrevOwnTextTrimmed.length();

				// If Length is equal
				if (length_prev_own_Text == length_Text) {
					return getParents(prev_sibling);

				}

				// If Length is not equal, then search for children
				else {

					Elements children = prev_sibling.children();

					for (Element child : children) {

						String strChildTrimmed = child.text().trim().replace("\n", "");
						int length_Child_Text = strChildTrimmed.length();

						if (length_Child_Text == length_Text) {

							String strChildOwnTextTrimmed = child.ownText().trim().replace("\n", "");
							int length_child_own_Text = strChildOwnTextTrimmed.length();

							if (length_child_own_Text == length_Child_Text) {
								return getParents(child);
							}
							// If length is not equal, check for it's children
							else {
								Elements children_level2 = child.children();
								for (Element child_level2 : children_level2) {

									String strChild_level2_Trimmed = child_level2.text().trim().replace("\n", "");
									int length_Child_level2_Text = strChild_level2_Trimmed.length();

									if (length_Child_level2_Text == length_Text) {

										String strChild_level2_OwnTextTrimmed = child_level2.ownText().trim()
												.replace("\n", "");
										int length_child_level2_own_Text = strChild_level2_OwnTextTrimmed.length();

										if (length_child_level2_own_Text == length_Child_Text) {
											return getParents(child_level2);
										}

										else {
											// Go for level 3 if required
										}

									}
								}
							}
						}

						else {
							continue;
						}
					}

				}

			}

			else {
				continue;
			}

		}

		return getSomePatterns(element.parent());

	}

	/**
	 * This method returns the parent tag pattern of the given element.
	 * 
	 * @param prev_sibling
	 * @return
	 */
	public static String getParents(Element ele) {

		String strReturn = "";

		try {
			String strParent5Tag = ele.parent().parent().parent().parent().parent().tagName().toLowerCase().trim();
			strReturn += ' ' + strParent5Tag;
		} catch (Exception e) {

		}

		try {
			String strParent4Tag = ele.parent().parent().parent().parent().tagName().toLowerCase().trim();
			strReturn += ' ' + strParent4Tag;
		} catch (Exception e) {

		}

		try {
			String strParent3Tag = ele.parent().parent().parent().tagName().toLowerCase().trim();
			strReturn += ' ' + strParent3Tag;
		} catch (Exception e) {

		}
		try {
			String strParent2Tag = ele.parent().parent().tagName().toLowerCase().trim();
			strReturn += ' ' + strParent2Tag;
		} catch (Exception e) {

		}
		try {
			String strParent1Tag = ele.parent().tagName().toLowerCase().trim();
			strReturn += ' ' + strParent1Tag;
		} catch (Exception e) {

		}

		String strOwnTag = ele.tagName().toLowerCase().trim();
		strReturn += ' ' + strOwnTag;

		if (strReturn.contains("body")) {
			strReturn = strReturn.trim();

			strReturn = strReturn.substring(strReturn.indexOf("body") + 4, strReturn.length());
		}

		return strReturn.trim();
	}

	/**
	 * This mthod checks if the passed sentence is related to the current title
	 * or not.
	 * 
	 * @param strcurrentheader
	 * @param str_last_String
	 * @param strOwnTrimmed
	 * @return
	 */
	public static boolean sentence_relates_to_last(String strcurrentheader, String str_last_String,
			String strOwnTrimmed) {

		Set<String> set_header_words = removestopwords(
				new HashSet<String>(Arrays.asList(strcurrentheader.toLowerCase().split(" "))));

		Set<String> set_last_string = removestopwords(
				new HashSet<String>(Arrays.asList(str_last_String.toLowerCase().split(" "))));

		Set<String> set_current_text = removestopwords(
				new HashSet<String>(Arrays.asList(strOwnTrimmed.toLowerCase().split(" "))));

		set_header_words.addAll(set_last_string);

		set_header_words.retainAll(set_current_text);

		if (1 < set_header_words.size())
			return true;

		return false;
	}

	/**
	 * Loads the tags which need to be skipped
	 */
	private static void loadSkipTags() {
		setSkipTags.add("script");
		setSkipTags.add("style");
		setSkipTags.add("form");
		setSkipTags.add("nav");
		setSkipTags.add("footer");
		setSkipTags.add("ul");
		setSkipTags.add("li");
		setSkipTags.add("a");
		setSkipTags.add("br");
		setSkipTags.add("hr");
		// setSkipTags.add("div");
		setSkipTags.add("ol");

	}

	/**
	 * This method removes the stop words from the given set.
	 * 
	 * @param hashSet
	 * @return
	 */
	public static Set<String> removestopwords(HashSet<String> hashSet) {

		Set<String> set_return = new HashSet<String>();

		for (String s : hashSet) {
			if (!Stopwords.isStopword(s))
				set_return.add(s);
		}

		return set_return;
	}
}
