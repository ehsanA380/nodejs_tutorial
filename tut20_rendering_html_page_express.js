const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome To Home Page</h1>
    <a href="/about">goto About page</a>
    `);
})
app.get('/about',(req,res)=>{
    // const name=req.query.name;
    res.send(`
        <input type="text" placeholder="Username" value="${req.query.name}">
        <button>click me</button><br>
    <a href="/">goto Home page </a>

    `);
})
app.get('/help',(req,res)=>{
    res.send([
        {
        name:'Ehsan',
        email:'ehsan@e.com'
    },
        {
        name:'Arman',
        email:'ehsan@e.com'
    },
        {
        name:'Sonu',
        email:'ehsan@e.com'
    },
]);
})


app.listen(port);