import fs from 'node:fs';
import path from 'node:path';

// This works because it replaces abstract network jargon with vivid, relatable despair.
const errorLine = "ERR_SQL_DEADLOCK: Two transactions entered the database circular roundabout and refused to yield.";

if (errorLine.length < 1 || errorLine.length > 200) {
  console.error("Error length out of bounds");
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), errorLine, 'utf-8');
console.log("Successfully wrote error entry.");
