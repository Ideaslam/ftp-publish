
exports = module.exports ={} 


exports.GetDirectories = async  function(dir, filelist ,callback  ) {
 
    const path = require('path');
    const fs = require('fs');
    let arr ;

    //joining path of directory 
    const directoryPath = path.join(dir, filelist);
    //passsing directoryPath and callback function
    fs.readdir(directoryPath,  function (err, files) {
    //handling error
   // if (err) throw err ;
    //listing all files using forEach
         callback(files);

	})

};



 

 