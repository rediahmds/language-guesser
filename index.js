// These lines make "require" available
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const process = require('process');

import { franc } from 'franc';
const langs = require('langs');

const args = process.argv.slice(2);
console.table(args);

/**
 * detectLanguage will detect the language of given argument.
 * @param {string} sentence - A word or sentence to test.
 * @returns {string} - Language code consists of three character.
 */
function detectLanguage(sentence) {
  return franc(sentence);
}

console.log(langs.where('2T', detectLanguage(args[0])).name);
