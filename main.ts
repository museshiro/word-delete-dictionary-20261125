// The Word You'd Delete From the Dictionary — one word, erased forever.
// Writes the word to /output/entry.txt only.
//
// The word: "actually" — the sound of pedantry. Erase it and no one can
// ever open with "well, actually..." again; every correction loses its
// first move, and the language loses nothing, because the word added
// nothing but the speaker's claim to know better.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "actually";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, WORD);
