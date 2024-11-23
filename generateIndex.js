import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility function to convert a string to camelCase
function toCamelCase(str) {
  return str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase()) // Convert - or _ followed by a letter to uppercase
    .replace(/^(.)/, (_, char) => char.toLowerCase()); // Lowercase the first letter
}

// Function to recursively generate index.ts files
function generateIndex(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  const exports = [];

  items.forEach(item => {
    const itemPath = path.join(dir, item.name);
    const relativePath = `./${item.name}`;
    const baseName = path.basename(item.name, path.extname(item.name));
    const extension = path.extname(item.name).replace('.', ''); // Remove the dot (e.g., 'css', 'png')

    if (item.isDirectory()) {
      // Recurse into subdirectories
      generateIndex(itemPath);
      exports.push(`export * from '${relativePath}';`);
    } else if (item.isFile() && item.name !== 'index.ts') {
      const name = toCamelCase(baseName) + extension.charAt(0).toUpperCase() + extension.slice(1);
      exports.push(`export { default as ${name} } from '${relativePath}';`);
    }
  });

  // Write index.ts if there are exports
  if (exports.length > 0) {
    const indexFile = path.join(dir, 'index.ts');
    fs.writeFileSync(indexFile, exports.join('\n'));
    console.log(`Generated: ${indexFile}`);
  }
}

// Start from the root assets directory
const assetsDir = path.resolve(__dirname, 'src/assets');
generateIndex(assetsDir);

