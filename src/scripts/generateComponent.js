import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];
const targetDirectory = process.argv[3] || 'src/components';

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const componentContent = `const ${componentName} = () => {
  return (
    <div>
      {/* Your component content goes here */}
      <h1>${componentName} Component</h1>
    </div>
  );
};

export default ${componentName};`;

const fileName = `${componentName}.jsx`;
const filePath = path.join(targetDirectory, fileName);

fs.writeFileSync(filePath, componentContent);

console.log(`Component '${componentName}' created at ${filePath}.`);
