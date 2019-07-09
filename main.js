var obj   = require('./Servers/ServerObject');
 
var mkDir = require('./MakeDirectory');
var Dir   = require('./GetDirectories');
var ftp   = require('./ftpUpload');



 


var generalDestPath ='' ; // always Empty
var generalSrcPath ='C:/inetpub/wwwroot';
var rootFolder ='FolderName';


async function publish (path,folder,generalDestPath){
        var error ;
     	// Create the folder if not exist
	    try{
	     console.log('create Folder -- '+generalDestPath+'/'+folder) ;
	     await  mkDir.MakeDirectory(folder,generalDestPath,obj);
	     
		}
		catch(ex)
		{
			console.log('folder Exist' + error) ;
		}
 

      Dir.GetDirectories(path,folder, async function(arr){ 
		for (var i =0  ; i< arr.length ; i++){
           
			if(arr[i].indexOf('.') != -1 ){

			var fileSrc = path+'/'+folder+'/'+arr[i] ; 
			var fileDest = generalDestPath+'/'+folder+'/'+arr[i] ; 
			console.log(fileSrc +'--'+fileDest) ;
			try{
			await ftp.ftpUpload(fileSrc,fileDest,obj);	
		}catch(err){
			console.log("error"+fileSrc+"--"+fileDest) ;
		}
			 
			}


			else{
		 
			
			publish ( path+'/'+folder,arr[i]  ,generalDestPath+'/'+folder) ;	

			
			}

			
		}
			
	 });

}
 


 publish (generalSrcPath ,rootFolder ,generalDestPath);	

