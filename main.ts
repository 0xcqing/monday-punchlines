/**
 * Monday Morning Punchlines entry for make.fun gentle-badger-68.
 *
 * Writes a single short joke about Monday mornings to entry.txt in the
 * make.fun output directory.
 *
 * @module main
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Output directory resolved from MAKEFUN_OUTPUT_DIR env var, defaulting to '/output'.
 * @type {string}
 */
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

/** Ensure the output directory exists before writing. */
mkdirSync(out, { recursive: true });

/**
 * The joke text about Monday mornings. Must be 1–200 UTF-8 characters,
 * not only whitespace, to pass the make.fun gate scorer.
 * @type {string}
 */
const joke = "Monday mornings are like PR review from your grumpiest senior — nobody wants to be there, nothing gets merged, and your weekend commit somehow gets the blame.";

// Write the joke as entry.txt for the judge model to score against other entries.
writeFileSync(join(out, 'entry.txt'), joke, 'utf-8');
