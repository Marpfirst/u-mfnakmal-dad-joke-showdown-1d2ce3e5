// Dad Joke Showdown — entry for u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes one original dad joke (136 chars) to /output/entry.txt.
// The joke was written for this entry: a father-and-son barbecue exchange
// whose punchline turns "grilled" from the grill into an interrogation.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my son the barbecue is just a campfire with a mortgage. He said, 'Dad, that's the most adult thing you've ever grilled me about.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
