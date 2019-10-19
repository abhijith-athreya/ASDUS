package com.lab.utils;

import static java.nio.file.FileVisitResult.CONTINUE;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.PathMatcher;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.List;

/**
 * This class is a custom FileFinder which has been extended from
 * SimpleFileVisitor. Given a pattern (glob format) and a starting directory,
 * this class finds all the files recursively.
 * 
 *
 */
public class FileFinder {

	
	/**
	 * 
	 * Inner class which extends SimpleFileVisitor and provides 
	 * additional methods to help traverse the file directory.
	 *
	 */
	public static class Finder extends SimpleFileVisitor<Path> {

		/**
		 * PathMatcher
		 */
		private final PathMatcher matcher;

		/**
		 * Placeholder to store all the matched file names.
		 */
		private List<String> listOfMatches = new ArrayList<String>();

		/**
		 * Constructor
		 * @param pattern
		 */
		Finder(String pattern) {
			matcher = FileSystems.getDefault().getPathMatcher("glob:" + pattern);
		}

		
		/**
		 * Compares the glob pattern against the file/directory name
		 * 
		 * @param file
		 *            FileName
		 */
		void find(Path file) {
			Path name = file.getFileName();
			if (name != null && matcher.matches(name)) {
				listOfMatches.add(file.toString());
			}
		}

		/**
		 * Returns the matched files.
		 * 
		 * @return List of Matches
		 */
		List<String> done() {

			return listOfMatches;
		}

		// Invoke the pattern matching method on each file.
		@Override
		public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {
			find(file);
			return CONTINUE;
		}

		// Invoke the pattern matching method on each directory.
		@Override
		public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) {
			find(dir);
			return CONTINUE;
		}

		/**
		 * In case of failure, continue.
		 */
		@Override
		public FileVisitResult visitFileFailed(Path file, IOException exc) {
			System.err.println(exc);
			return CONTINUE;
		}
	}

	/**
	 * Error Message
	 */
	static void usage() {
		System.err.println("java Find <path>" + " -name \"<glob_pattern>\"");
		System.exit(-1);
	}

	/**
	 * This method finds and returns all files which matches against the pattern
	 * passed.
	 * 
	 * @param startingDirectory
	 *            Starting Directory
	 * @param pattern
	 *            Pattern
	 * @return List of Matched Files
	 * @throws IOException
	 */
	public static List<String> findFiles(String startingDirectory, String pattern) throws IOException {

		Path startingDir = Paths.get(startingDirectory);

		Finder finder = new Finder(pattern);
		Files.walkFileTree(startingDir, finder);
		return finder.done();

	}
}