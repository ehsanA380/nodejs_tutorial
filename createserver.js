const color = require('colors');
const http= require('http');

http.createServer((req,res)=>{
    res.write(`<h1> welcome to the brand new server nodjs</h1>`);
    res.end();
}).listen(90);
console.log("ehsna.red".cyan);