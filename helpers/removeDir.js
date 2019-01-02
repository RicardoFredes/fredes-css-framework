const fs = require('fs')

const removeDir = (() => (dir, rmSelf) => {
  let files
  rmSelf = (rmSelf === undefined) ? true : rmSelf
  dir = dir + "/"
  try {
    files = fs.readdirSync(dir)
  } 
  catch (e) {
    return console.log("Esse diretório não existe.")
  }
  if (files.length > 0) {
    files.forEach((x, i) => {
      if (fs.statSync(dir + x).isDirectory()) rmDir(dir + x)
      else fs.unlinkSync(dir + x)
    })
  }
  if (rmSelf) fs.rmdirSync(dir)
})

module.exports = removeDir