// Lists every image still served from stock, so the remaining photography can
// be tracked before launch. Run with `npm run audit:photography`.

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "src/lib/images.ts"), "utf8");

const entries = [...source.matchAll(/^ {2}(\w+): \{\n([\s\S]*?)^ {2}\},$/gm)].map(([, key, block]) => ({
  key,
  file: block.match(/file: "([^"]+)"/)?.[1] ?? "",
  commissioned: /commissioned: true/.test(block),
  subject: block.match(/subject:\s*\n?\s*"([^"]+)"/)?.[1] ?? "",
}));

const pending = entries.filter((e) => !e.commissioned);
const missingFile = entries.filter(
  (e) => e.commissioned && !existsSync(join(root, "public/photography", e.file)),
);

console.log(`\nPhotography audit — ${entries.length} images registered\n`);

if (pending.length === 0) {
  console.log("  All images are commissioned. Nothing on stock.\n");
} else {
  console.log(`  ${pending.length} still on stock:\n`);
  for (const e of pending) {
    console.log(`    ${e.file.padEnd(26)} ${e.subject}`);
  }
  console.log("");
}

if (missingFile.length > 0) {
  console.error("  Marked commissioned but the file is missing from public/photography:\n");
  for (const e of missingFile) console.error(`    ${e.file}`);
  console.error("");
  process.exit(1);
}
