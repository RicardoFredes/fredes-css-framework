const fs = require('fs')
const stylus = require('stylus')
const rupture = require('rupture')
const minifiers = require('css-minifiers')
const csso = minifiers.csso
const writeFile = require('./helpers/writeFile')

stylus(fs.readFileSync(paths, 'utf8'))
  .use(rupture())
  .render((error, css) => {
    if (error) return console.log(error)
    csso(css).then(cssMin => writeFile(cssMin))
  })
