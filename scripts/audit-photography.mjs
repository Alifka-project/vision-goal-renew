// Lists which images are real photographs and which are still stock, so the
// remaining photography can be tracked. Run with `npm run audit:photography`.
//
// It reads src/lib/images.ts directly: every `key: u("photo-…")` entry is an
// Unsplash stock frame, and every "/photos/…" path is a real photograph.

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "src/lib/images.ts"), "utf8");
const block = source.slice(source.indexOf("export const images"));

const stock = [...block.matchAll(/^ {2}(\w+): u\("([^"]+)"[^)]*\),?[ \t]*(?:\/\/[ \t]*(.*))?$/gm)].map(
  ([, key, id, note]) => ({ key, id, note: note ?? "" }),
);
const real = [...source.matchAll(/^ {2}(\w+): "(\/photos\/[^"]+)"/gm)].map(([, key, file]) => ({
  key,
  file,
}));
const missing = real.filter((r) => !existsSync(join(root, "public", r.file)));

console.log(`\nPhotography audit — ${real.length} real, ${stock.length} stock\n`);
console.log("  Real photographs:");
for (const r of real) console.log(`    ${r.key.padEnd(22)} ${r.file}`);
console.log("\n  Still on stock:");
for (const e of stock) console.log(`    ${e.key.padEnd(22)} ${e.note || e.id}`);
console.log("");

if (missing.length > 0) {
  console.error("  Registered but missing from /public:\n");
  for (const r of missing) console.error(`    ${r.file}`);
  console.error("");
  process.exit(1);
}
