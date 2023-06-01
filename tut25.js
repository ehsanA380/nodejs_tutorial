const express = require('express');
const app=express();

const reqFilter=(req,res,next)=>{
    console.log('reqFilter');
    if(!req.query.age){
        res.send("please provide age")
    }
    else if(req.query.age<18){
        res.send("you can not access this page")
    }
    else{
        // console.log(req.query);

        next();
    }
}
app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('welcome to Home page');
})


app.get('/users',(req,res)=>{
    res.send('welcome to Userspage page');
})

app.listen(3000);