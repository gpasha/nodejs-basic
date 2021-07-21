const path = require('path')

console.log('path.basename(__filename): ', path.basename(__filename))
/* console.log('path.basename(__dirname): ', path.basename(__dirname)) */
console.log('path.dirname(__filename): ', path.dirname(__filename))
console.log('path.extname(__filename): ', path.extname(__filename))
console.log('path.parse(__filename): ', path.parse(__filename))

console.log("path.join(__filename, 'test', 'test.js'): ", path.join(__dirname, 'test', 'test.js'))
console.log("path.resolve(__filename, 'test', 'test.js'): ", path.resolve(__dirname, './test', '/test.js'))
