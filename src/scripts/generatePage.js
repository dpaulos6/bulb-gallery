const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
const targetDirectory = process.argv[3] || 'src/pages';

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const title = componentName.charAt(0).toUpperCase() + componentName.slice(1);

const componentContent = `---
import Layout from "../layouts/Layout.astro";

import "../styles/Theme.css";
import "../styles/Diagonals.css";
import "../styles/Conditionals.css";
import "../styles/Global.css";
---

<Layout title="${title}">
</Layout>`;

const fileName = `${componentName}.astro`;
const filePath = path.join(targetDirectory, fileName);

fs.writeFileSync(filePath, componentContent);

console.log(`Component '${componentName}' created at ${filePath}.`);