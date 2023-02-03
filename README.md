## Language Guesser

A terminal-based node application to guess the language of text given via command line argument.

## Packages

- `franc v6.1.0` is used to recognize the text given. Resulting the most probable language in form of three char (e.g spa, afr, ind, fra) which will be consumed by `langs`.
- `langs v2.0.0` will consume the generated three chars and print out the complete language name.

## How to run the app

1. First, clone this repo
2. Open the repo in your editor
3. Open terminal and run `npm i`
4. Now run the app using the command `node ./index.js "your first text here" "your second text here" "your n-th text here"`

For example, `node .\index.js 'Alle menslike wesens word vry' 'Alle menneske er fødde til fridom' 'এটি একটি ভাষা একক IBM স্ক্রিপ্ট'`. And it will give "English", "Norwegian Nynorsk", and "Bengali" as the result.

## Known Limitations

- **Limitation**: May incorrectly guess the language if small samples given (e.g text length less than 5 character). **Solution**: Try to give a pretty long text to get a better result.
