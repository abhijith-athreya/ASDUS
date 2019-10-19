package com.lab.test;

import java.awt.Desktop;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.lab.utils.FileFinder;

/**
 * This class is responsible for testing the Coverage of the HTML documents.
 * Usage: Change the main method to provide the correct path of HTML files. Both
 * the gold version and the test version should be present in the same
 * directory.
 * 
 * This class compares the text in both the files, and creates a HTML page
 * containing the coverage of all the files.
 *
 */
public class TestCoverage {

	/**
	 * Entry method to test the coverage.
	 * 
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {

		// Change this to obtain higher accuracy
		DecimalFormat df = new DecimalFormat("#.##");

		Map<String, Double> mapSite_Accuracy = new TreeMap<String, Double>();

		
		/**
		 * Change this and pass the parent folder here.
		 * 
		 */
		String strParentFolder = "C:\\ParentFolder";

		/**
		 * Change this and pass the appropriate test file name (Pass only the
		 * file name). All the files under the parent folder with this file name
		 * will be used for testing. Appropriate gold.html should be present
		 * along side each test file to compare.
		 */
		String strTestFileName = "dom_ind.html";

		/**
		 * Change this and pass the appropriate gold file name (Pass only the
		 * file name). All the files under the parent folder with this file name
		 * will be used for testing. Appropriate testing file should be present
		 * along side each gold file to compare.
		 */
		String strGoldFileName = "gold.html";

		/**
		 * Change this if you need the results file to be generated elsewhere.
		 * Provide the complete path, including the file name.
		 */
		String strHTMLResultsFile = "compare_results_other.html";

		List<String> listOfPolicies = FileFinder.findFiles(strParentFolder, strTestFileName);

		// Create the results file.
		File file = new File(strHTMLResultsFile);
		FileWriter fileWriter = null;
		BufferedWriter bufferedWriter = null;

		fileWriter = new FileWriter(file);
		bufferedWriter = new BufferedWriter(fileWriter);

		String htmlHeader = "<html><head><title> " + "Results" + "</title></head>";
		bufferedWriter.write(htmlHeader);

		double total_accuracy = 0;
		int total_count = 0;

		// Start reading files
		for (String strInput : listOfPolicies) {

			double pass_count = 0;
			double fail_count = 0;
			// Buffer Size
			int size = 10;

			// Folder Name
			String websiteName = strInput.substring(0, strInput.lastIndexOf("\\"));
			websiteName = websiteName.substring(websiteName.lastIndexOf("\\") + 1, websiteName.length());

			File lhs;
			File rhs;
			try {
				lhs = new File(strInput.replace(strTestFileName, strGoldFileName));

				rhs = new File(strInput);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				continue;
			}

			// StringBuilder lhs_builder = new StringBuilder();
			StringBuilder rhs_builder = new StringBuilder();

			Document doc = null;

			try {
				// Start reading RHS
				doc = Jsoup.parse(rhs, "UTF-8");

				rhs_builder.append((doc.body().text().trim().toLowerCase()));

				doc = Jsoup.parse(lhs, "UTF-8");
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				continue;
			}

			total_count++;

			Elements elements = doc.body().select("*");
			String rhs_string = rhs_builder.toString();

			for (Element element : elements) {

				String strOwnText = element.ownText().trim().toLowerCase();

				if (strOwnText.length() > 4) {

					// Split Strings into groups of ten and calculate

					List<String> ret = new ArrayList<String>((strOwnText.length() + size - 1) / size);

					for (int start = 0; start < strOwnText.length(); start += size) {
						ret.add(strOwnText.substring(start, Math.min(strOwnText.length(), start + size)));
					}

					for (String r : ret) {

						if (rhs_string.contains(r))
							pass_count = pass_count + 1.0;
						else
							fail_count = fail_count + 1.0;
					}

				}

			}

			double accuracy = 0.0;
			if ((pass_count + fail_count) > 1) {
				accuracy = ((pass_count / (pass_count + fail_count)) * 100);
			}
			total_accuracy += accuracy;
			mapSite_Accuracy.put(websiteName, accuracy);

		}

		String htmlBody = "<body style=’background-color:#ccc’><h1><center><u>" + "Average Accuracy = "
				+ df.format(total_accuracy / total_count) + "</u></center></h1>";
		bufferedWriter.write(htmlBody);

		bufferedWriter.append("<table border=\"0.8em\"  cellpadding=\"10\"><tr><th>  Sl.No  </th><th>  Website  </th>"
				+ "<th> Accuracy </th></tr>");

		int int_loop = 1;
		for (Entry<String, Double> entry : mapSite_Accuracy.entrySet()) {

			// System.out.println("Key : " + entry.getKey() + " Value : " +
			// entry.getValue());

			bufferedWriter.append("<tr>");
			if (entry.getValue() < 85.0) {
				// <font color="#f00">
				bufferedWriter.append("<td><font color=\"#f00\">" + int_loop + "</font></td>");
				bufferedWriter.append("<td><font color=\"#f00\">" + entry.getKey() + "</font></td>");
				bufferedWriter.append("<td><font color=\"#f00\">" + entry.getValue() + "</font></td>");

			} else {
				bufferedWriter.append("<td>" + int_loop + "</td>");
				bufferedWriter.append("<td>" + entry.getKey() + "</td>");
				bufferedWriter.append("<td>" + df.format(entry.getValue()) + "</td>");
			}

			bufferedWriter.append("</tr>");
			int_loop++;
		}

		bufferedWriter.append("</table></body></html>");
		bufferedWriter.flush();
		fileWriter.flush();

		bufferedWriter.close();
		fileWriter.close();

		File htmlFile = new File(strHTMLResultsFile);
		try {
			Desktop.getDesktop().browse(htmlFile.toURI());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
