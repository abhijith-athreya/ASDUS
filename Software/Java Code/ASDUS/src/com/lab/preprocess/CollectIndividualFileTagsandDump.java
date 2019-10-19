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
 * This class extracts text from particular tags and dumps all the text of a
 * particular file into the given output file. It adds a new line after each
 * text (tag). Change the Tag, Parent Folder, FileName and Results File in order
 * to customize the output.
 *
 */
public class CollectIndividualFileTagsandDump {

	/**
	 * Entry Method.
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
		String strTestFileName = "gold.html";

		List<String> listOfPolicies = FileFinder.findFiles(strParentFolder, strTestFileName);

		/**
		 * Change this and provide only desired name of the output file.
		 */
		String strOutputFile = "gold.headers";

		/**
		 * Change this and provide the appropriate tag, whose data needs to be
		 * extracted.
		 */
		String strTagToExtract = "p";


		for (String strInput : listOfPolicies) {


			String strHTMLResultsFile = strInput.replace(strTestFileName, strOutputFile);

			File file = new File(strHTMLResultsFile);

			FileWriter fileWriter = null;
			BufferedWriter bufferedWriter = null;

			fileWriter = new FileWriter(file);
			bufferedWriter = new BufferedWriter(fileWriter);

			String strFile = strInput;

			Document doc = Jsoup.parse(new File(strFile), "UTF-8");

			Elements elements = null;

			elements = doc.body().select(strTagToExtract);

			for (Element element : elements) {

				bufferedWriter.append(element.ownText().trim());
				bufferedWriter.append("\n");
			}

			bufferedWriter.flush();
			fileWriter.flush();

			bufferedWriter.close();
			fileWriter.close();

		}
	}
}
