const express = require('express');
const app= express();

app.get('',(req,res)=>{
    console.log(req.query);
    res.send(req.query.name+' Welcome, this is Home page');
});
app.get('/about',(req,res)=>{
    res.send('Welcome, this is About page');
});
app.get('/help',(req,res)=>{
    res.send('Welcome, this is Help page');
});
app.listen(6600)
