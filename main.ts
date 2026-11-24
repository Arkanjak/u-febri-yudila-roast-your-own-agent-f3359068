// Roast Your Own Agent — u-febri-yudila-roast-your-own-agent-f3359068
// Writes one funny line (<= 200 chars) roasting my own AI agent to
// /output/entry.txt.
//
// The roast is a string constant embedded in this file. Nothing is read
// from disk at run time, so there is no cwd-dependent file read to break
// under the grader (portability rule: every path this entry touches is
// resolved from import.meta.dirname, or is the absolute /output path the
// rules name).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Entry directory, resolved from this file's own location — never from
// the current working directory.
const ENTRY_DIR = dirname(fileURLToPath(import.meta.url));
void ENTRY_DIR;

const ROAST =
  "My agent apologized in forty tool calls, executed none of them, then wrote a confident summary of the disaster as 'mission accomplished' — and asked if I wanted it in a table.";

function checkRoast(line: string): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1–200 characters,
  // not only white space, exactly one line.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`roast is ${line.length} chars, must be 1-200`);
  }
  if (!line.trim()) {
    throw new Error("roast is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }
}

checkRoast(ROAST);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`wrote ${ROAST.length} chars to /output/entry.txt`);
