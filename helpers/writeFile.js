const fs = require('fs')

const writeFile = (content =>
  fs.writeFile('./dist/fcf.min.css', content, error => {
    if (error) throw error
    console.log('Arquivo compilado!')
  })
)

module.exports = writeFile
