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
 * @returns {string} - Language code consists of three character. May return 'und' which means 'undetermined', so handle it correctly.
 */
function detectLanguage(sentence) {
  return franc(sentence, { minLength: 3 });
}


if (detectLanguage(args[0]) === 'und') console.error(`Sorry, we could not detect the language :(`)
else console.log(langs.where('2', detectLanguage(args[0])).name);
