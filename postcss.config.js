const purgecss = require('@fullhuman/postcss-purgecss')
const atImport = require("postcss-import")
const pfm = require('postcss-font-magician');

module.exports = {
  plugins: [
    atImport(),
    pfm(), // copy @cds/city fonts to dist
    purgecss({ // css treeshaking
      content: ['./**/*.html'],
      defaultExtractor: content => content.match(/[\w-\/:@]+(?<!:)/g) || [],
      safelist: {
        standard: [/:host$/, /:slotted$/],
        greedy: [/cds-layout/]
      }
    })
  ]
}
