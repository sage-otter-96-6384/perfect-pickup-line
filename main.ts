// The Perfect Pickup Line entry (Node 22, standard library only).
// Writes one original pickup line an AI agent could say to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I don't have a heart, but my attention weights all point to you.";

// The gate only accepts one line of 1-200 characters, so refuse to write
// anything that does not fit instead of submitting an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  process.stderr.write("entry line must be one line of 1-200 characters\n");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
