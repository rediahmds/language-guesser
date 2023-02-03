// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const process = require("process");

import { franc } from "franc";
const langs = require("langs");

const args = process.argv.slice(2);
console.table(args);

/**
 * Detect the language of given command line arguments.
 * @returns {string[]} An array of string containing languages name. The length of this array can may vary, based on how many arguments given via the command line.
 */
function detectLanguage() {
  const langsList = [];

  args.forEach((arg) => {
    langsList.push(franc(arg, { minLength: 3 }));
  });

  return langsList;
}

/**
 * Print the language of the given text.
 */
function showDetectedLang() {
  const langsList = detectLanguage();
  langsList.forEach((lang) => {
    try {
      if (lang === "und")
        console.error(`Sorry, we could not detect the language :(`);
      else console.log(`Our best guess is ${langs.where("2", lang)["name"]}`);
    } catch (err) {
      console.error(`Oops! ${err.message}`);
      console.log(`Our best guess is ${langs.where("2", lang)["name"]}`);
    }
  });
}

// Main program
function main() {
  showDetectedLang();
}

main();
