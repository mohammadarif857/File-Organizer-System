let fs=require("fs");
let path=require("path");

function organizefun(dirPath){
    // console.log("organize commond implemented for ", dirPath);
 // 1. input-> directory path given
 let destPath;
 if(dirPath == undefined){
     //console.log("Kindly enter the correct Path");
     destPath = process.cwd();  
     return;
 } else{
 let doesExist=fs.existsSync(dirPath);
 if(doesExist){
 
 // 2. create -> organized file ->directory
  destPath = path.join(dirPath, "organized_files");
 if(fs.existsSync(destPath) == false){
 fs.mkdirSync(destPath);
 }
 
 }else{
     console.log("Kindly enter the correct Path");
 return;
 }
 }
 
 organizeHelper(dirPath, destPath);
 
 
 }
 
    
 function organizeHelper(src, dest){
 // 3. identify category of all the files process to that input directory
  let childNames = fs.readdirSync(src);
  //console.log(childNames);
  for(let i=0; i<childNames.length; i++){
    let childAddress = path.join(src, childNames[i]);
    let isfile = fs.lstatSync(childAddress).isFile();
    if(isfile){
     // console.log(childNames[i]);
     let category = getCategory(childNames[i]);
     console.log(childNames[i],"belong to -->",category);
 // 4. copy/cut files to that organized folder
 sendFiles(childAddress, dest, category);
 
    }
  }
 
 }
 
 function sendFiles(srcFilePath, dest, category){
 
  let categoryPath = path.join(dest, category);
  if(fs.existsSync(categoryPath) == false) {
    fs.mkdirSync(categoryPath);
  }
  let fileName = path.basename(srcFilePath);
   let destFilePath = path.join(categoryPath, fileName);
   fs.copyFileSync(srcFilePath, destFilePath);
   // for cut the files
   fs.unlinkSync(srcFilePath);
   console.log(fileName, "copied to " , category);
 }
 
 function getCategory(name){
 let ext = path.extname(name);
 ext = ext.slice(1);
 //console.log (ext);
  for(let type in types){
       let cTypeArray = types[type];
       for(let i=0;i<cTypeArray.length;i++){
           if(ext==cTypeArray[i]){
             return type;
      }
    }
  }
  return "others";
 }
 module.exports={
     organizeKey:organizefun
 }