const fs = require('fs');
const path = require('path');

// Configuration
const config = {
    rootDir: 'src/app',  // Root directory to start searching from
    outputFile: 'combined_code.txt',  // Output file name
    extensions: ['.ts', '.html', '.css', '.scss'],  // File extensions to include
    excludeDirs: ['node_modules', 'dist', 'e2e']  // Directories to exclude
};

// Function to walk through directory recursively
function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            // Skip excluded directories
            if (!config.excludeDirs.includes(file)) {
                results = results.concat(walkDir(filePath));
            }
        } else {
            // Check if file extension should be included
            if (config.extensions.includes(path.extname(file))) {
                results.push(filePath);
            }
        }
    });
    
    return results;
}

// Function to combine files
function combineFiles() {
    try {
        // Get all relevant files
        const files = walkDir(config.rootDir);
        
        // Create output stream
        const outputStream = fs.createWriteStream(config.outputFile);
        
        // Process each file
        files.forEach(filePath => {
            // Add file path as comment
            outputStream.write(`\n// ${filePath}\n`);
            
            // Read and write file content
            const content = fs.readFileSync(filePath, 'utf8');
            outputStream.write(content);
            
            // Add separator
            outputStream.write('\n\n' + '='.repeat(80) + '\n\n');
        });
        
        // Close the stream
        outputStream.end();
        
        console.log(`Successfully combined ${files.length} files into ${config.outputFile}`);
        console.log('Processed files:');
        files.forEach(file => console.log(`- ${file}`));
        
    } catch (error) {
        console.error('Error combining files:', error);
    }
}

// Run the script
combineFiles();