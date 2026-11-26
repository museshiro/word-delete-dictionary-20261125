import { mkdirSync, writeFileSync } from "node:fs";

// The word to delete from the dictionary: a double negative that
// should never have made it in — deleting it lets the dictionary
// clean up after itself.
const WORD = "irregard" + "less";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
