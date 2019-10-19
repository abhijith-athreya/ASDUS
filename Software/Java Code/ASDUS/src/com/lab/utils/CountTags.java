package com.lab.utils;

import java.io.File;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

/**
 * This is a utility class which outputs the count of a particular tag in a
 * given HTML file(s).
 * 
 *
 */
public class CountTags {

	/**
	 * Entry Point - Change the Path and the file name before using.
	 * 
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {

		/**
		 * Change this and pass the parent folder here.
		 * 
		 */
		String strParentFolder = "C:\\UsablePrivacyPolicy\\Data\\Misc";

		/**
		 * Change this and pass the appropriate test file name (Pass only the
		 * file name). All the files under the parent folder with this file name
		 * will be used for counting.
		 */
		String strTestFileName = "dom_ind.html";

		/**
		 * Change this and use appropriate tag.
		 */
		String strTagToCount = "p";

		List<String> listOfPolicies = FileFinder.findFiles(strParentFolder, strTestFileName);
		int count = 0;

		for (String strInput : listOfPolicies) {

			String strFile = strInput;

			Document doc = Jsoup.parse(new File(strFile), "UTF-8");

			Elements elements = null;

			elements = doc.body().select(strTagToCount);

			count += elements.size();

		}

		System.out.println("Number of <" + strTagToCount + "> Tags = " + count);
	}
}
