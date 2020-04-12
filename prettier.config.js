/**
 * Prettier config
 * @see https://prettier.io/docs/en/options.html
 */

module.exports = {
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'always',
    endOfLine: 'lf',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
