const fs = require('fs')

function makeRequiredDirs(folderName){

    try {
        if (!fs.existsSync(folderName)){
            fs.mkdirSync(folderName)
        }
      } catch (err) {
        console.error(err)
      }

}
module.exports = {
    makeRequiredDirs : makeRequiredDirs
}