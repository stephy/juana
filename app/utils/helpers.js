let fs = require("fs");

module.exports = {

  checkDirectorySync: function (directory) {  
    try {
      fs.statSync(directory);
    } catch(e) {
      fs.mkdirSync(directory);
    }
  }

}



