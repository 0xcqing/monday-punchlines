/**
 * Monday Morning Punchlines entry for make.fun gentle-badger-68.
 *
 * Writes a single short joke about Monday mornings to entry.txt in the
 * make.fun output directory.
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });

const joke = "Monday mornings are like a code review from your least-favorite senior dev — nobody wants to be there, nobody learns anything, and somehow your weekend is still the one being blamed.";
writeFileSync(join(out, 'entry.txt'), joke, 'utf-8');
