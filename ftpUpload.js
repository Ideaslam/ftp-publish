
exports = module.exports ={} 

exports.ftpUpload =function (srcPath, DestPath , obj ){

return new Promise(resolve => {
var config ={} ; 

config.host = obj.host ;
config.port = obj.port ;
config.user = obj.user;
config.password = obj.password;
 

 
// // UPload File
 var Client = require('ftp');
  var fs = require('fs');
 
  var c = new Client();
  c.on('ready', function() {
  
    c.put(srcPath, DestPath, function(err) {
     if (err) {
         
         reject(err);
    }
    resolve('x');
      c.end();
    });
  });
  
  c.connect(config);

});
}