const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, '../dist/icons.json')

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) throw err
  const dataJson = JSON.parse(data)
  const cleanJson = Object.keys(dataJson).reduce((acc, key) => {
    acc[key.replace('icon--', '')] = dataJson[key]
    return acc
  }, {})
  fs.writeFile(filePath, JSON.stringify(cleanJson, null, 2), (err) => {
    if (err) throw err
    console.log('--> ICON JSON SAVED')
  })
})
