// Ridiculous at First Glance, Real by the Second
// make.fun bounty u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
//
// One sentence, at most 200 characters, pitching a bizarre startup idea that
// sounds absurd until you realise it would actually sell. The program writes
// that sentence to /output/entry.txt, exactly as the judge will read it.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We bottle the air from the exact street where you grew up and sell it " +
  "to homesick expats for $29 a jar \u2014 nostalgia is the only import " +
  "no tariff can touch.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything that would fail it.
const length = [...PITCH].length;
if (PITCH.trim().length === 0 || length < 1 || length > 200) {
  throw new Error(`pitch must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
