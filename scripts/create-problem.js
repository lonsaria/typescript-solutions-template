import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptPath = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(scriptPath);

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: npm run new -- <id> <name-in-kebab-case>');
  console.error('Example: npm run new -- 20 valid-parentheses');
  process.exit(1);
}

const [number, ...nameParts] = args;
const name = nameParts.join('-');
const paddedNumber = number.padStart(4, '0');
const folderName = `${paddedNumber}-${name}`;
const targetDir = path.join(scriptDir, '..', 'src', 'problems', folderName);

if (!/^\d+$/.test(number)) {
  console.error('Problem ID must contain digits only.');
  process.exit(1);
}

if (!name || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
  console.error('Problem name must use kebab-case.');
  process.exit(1);
}

if (fs.existsSync(targetDir)) {
  console.error(`Folder ${folderName} already exists.`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

let functionName = name.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
if (/^\d/.test(functionName)) {
  functionName = `problem${functionName}`;
}
const title = name
  .split('-')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
const solution = `export function ${functionName}(): void {
  // TODO: Implement the solution
}
`;
const test = `import { describe, it } from 'vitest';

describe('${paddedNumber}. ${title}', () => {
  it.todo('Implement a basic test for ${functionName}');
});
`;
const run = `import { ${functionName} } from './solution';

const result = ${functionName}();

console.dir(result, { depth: null });
`;
const readme = `---
difficulty:
source:
tags:
  -
---

# ${paddedNumber}. ${title}

TODO: Describe the problem.

## Input Format

TODO: Describe the input.

## Output Format

TODO: Describe the output.

## Examples

TODO: Add examples.

## Constraints

TODO: Add constraints.
`;

fs.writeFileSync(path.join(targetDir, 'solution.ts'), solution);
fs.writeFileSync(path.join(targetDir, 'solution.test.ts'), test);
fs.writeFileSync(path.join(targetDir, 'run.ts'), run);
fs.writeFileSync(path.join(targetDir, 'README.md'), readme);

console.log(`Created problem: ${folderName}`);
