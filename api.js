const http = require('http');
const data = require('./data');
const { log } = require('console');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application/json'});
res.write(JSON.stringify(data));
res.write('<p>ehsan</p>');
res.end();
}).listen(5500);
console.log`server is running on http://127.0.0.1:5500`;