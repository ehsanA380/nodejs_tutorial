const fs = require('fs');
const path =require('path');
const dirPath = path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;
// creating file
// fs.writeFileSync(filePath,"this is a simple text file");
// reading file
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// appending in the content of file
// fs.appendFile(filePath,"and file name is apple.txt",(err)=>{
//     if(!err){
//         console.log("file is updated");
//     }
//     else{
//         console.log(err);
//     }
// });

// updating the file name
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("file name is updated");
//     }
// });

// deleting the file form directory
fs.unlinkSync(`${dirPath}/fruit.txt`);