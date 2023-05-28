const { rejects } = require("assert");
const { resolve } = require("path");

let a=10;
let b=0;

// setTimeout(() => {
//     // console.log("logic exe...");
//     b=90;
// }, 2000);

// /// drawback of asynchronous 
// console.log(a+b);

// handling of drawback => promise

let waitingData= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30);
    }, 2000);
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})