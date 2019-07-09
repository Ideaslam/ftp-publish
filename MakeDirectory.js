
exports = module.exports ={} 

exports.MakeDirectory =function (dirName, parentDir ,obj){
return new Promise(resolve => {

var config ={} ; 
config.host = obj.host ;
config.port = obj.port ;
config.user = obj.user;
config.password = obj.password;
 


  // MKDIR
   var Client = require('ftp');
  var fs = require('fs');
 
  var c = new Client();
  c.on('ready', function() {
   c.mkdir(parentDir+'/'+dirName,false, function(err) {
    // if (err) throw err ;
      resolve('x');
      c.end();
   });
     
  
  });
   
  c.connect(config);
});
}
