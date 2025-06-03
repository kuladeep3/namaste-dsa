const fs = require("fs");
const path = require("path");

// Function to convert filename to title
function filenameToTitle(filename) {
  return filename
    .replace(/\.js$/, "") // Remove .js extension
    .replace(/[_-]/g, " ") // Replace underscores and hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
}

// Function to process a single directory
function processDirectory(dirPath) {
  try {
    // Read all files in the directory
    const files = fs.readdirSync(dirPath);

    // Filter for JavaScript files
    const jsFiles = files.filter((file) => file.endsWith(".js"));

    if (jsFiles.length === 0) {
      console.log(`No JavaScript files found in ${dirPath}`);
      return;
    }

    console.log(`Found ${jsFiles.length} JavaScript file(s) in ${dirPath}`);

    jsFiles.forEach((jsFile) => {
      const jsFilePath = path.join(dirPath, jsFile);
      const mdFileName = jsFile.replace(/\.js$/, ".md");
      const mdFilePath = path.join(dirPath, mdFileName);

      // Check if markdown file already exists
      if (fs.existsSync(mdFilePath)) {
        console.log(`Skipping ${mdFileName} - already exists`);
        return;
      }

      try {
        // Read JavaScript file content
        const jsCode = fs.readFileSync(jsFilePath, "utf8");

        // Generate title from filename
        const title = filenameToTitle(jsFile);

        // Create markdown content
        const mdContent = `# ${title}

\`\`\`javascript
${jsCode}
\`\`\`
`;

        // Write markdown file
        fs.writeFileSync(mdFilePath, mdContent);
        console.log(`✓ Created ${mdFileName}`);
      } catch (error) {
        console.error(`Error processing ${jsFile}:`, error.message);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
  }
}

// Function to recursively process directories
function processDirectoryRecursive(dirPath) {
  try {
    const stats = fs.statSync(dirPath);

    if (!stats.isDirectory()) {
      console.error(`${dirPath} is not a directory`);
      return;
    }

    // Process current directory
    processDirectory(dirPath);

    // Get all subdirectories
    const items = fs.readdirSync(dirPath);
    const subdirs = items.filter((item) => {
      const itemPath = path.join(dirPath, item);
      return fs.statSync(itemPath).isDirectory();
    });

    // Recursively process subdirectories
    subdirs.forEach((subdir) => {
      const subdirPath = path.join(dirPath, subdir);
      console.log(`\nProcessing subdirectory: ${subdirPath}`);
      processDirectoryRecursive(subdirPath);
    });
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

// Main execution
function main() {
  // Get target directory from command line argument or use current directory
  const targetDir = process.argv[2] || "./";

  // Check if recursive flag is provided
  const isRecursive =
    process.argv.includes("--recursive") || process.argv.includes("-r");

  console.log(`Processing directory: ${path.resolve(targetDir)}`);
  console.log(`Recursive mode: ${isRecursive ? "ON" : "OFF"}`);
  console.log("---");

  if (isRecursive) {
    processDirectoryRecursive(targetDir);
  } else {
    processDirectory(targetDir);
  }

  console.log("\nProcessing complete!");
}

// Run the script
main();
