const http = require('http');
const data = require('./data');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application/json'});
res.write(JSON.stringify(data));
res.write('<p>ehsan</p>');
res.end();
}).listen(5500);