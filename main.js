#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./commonds/help");
let treeObj = require("./commonds/tree");
let organizeObj = require("./commonds/organize");
const { organizeKey } = require("./commonds/organize");
//console.log(inputArr);


// node main.js tree "directorypath"
// node main.js organize "directoryPath"
// node main.js help

let commond = inputArr[0];
types ={
media: ["mp4","mkv"],
archives: ['zip','7z','rar','tar','gz','gz','ar','iso',"xz"],
document: ['docx','doc','pdf','xlsx','xls','txt','pptx','odt','ods','odp','odg','odf','ps','tex'],
app: ["exe",'pkg','deb',"dmg"]

}




switch(commond) {

    case "tree" :
  treeObj.treeKey(inputArr[1]);
    break;

    case "organize":
      organizeObj.organizeKey(inputArr[1]);
      break;

      case "help":
          helpObj.helpKey();
          break;

          default:
              console.log ("🙏 Please Input Right Commond");
              break;
}













