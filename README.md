## Language Guesser

A terminal-based node application to guess the language of text given via argv.

## Packages

- `franc v6.1.0` is used recognize the text given and then result the most probable language in form of three char (e.g spa, afr, ind, fra) which will be consumed by `langs`
- `langs v2.0.0` will consume the generated three chars and then show the complete language name.

## How to run the app

1. First, clone this repo
2. Open the repo in your editor
3. Open terminal and run `npm i`
4. Now run the app using the command `node ./index.js "your text here"`

For example, `node ./index.js "This is a sentence"`. And it will give "English" as the result.

## Known Limitations

- **Limitation**: May incorrectly guess the language if small samples given (e.g text length less than 5 character). **Solution**: Try to give a pretty long text to get better a result.
