const express = require('express');
const reqfilter=require('./middleware')
const app=express();
const route = express.Router();


// app.use(reqFilter) // this is used for filtering the request over the application level  
//for individual use of reqfilter we can provide the reqfilter in individual app.get() parame

route.use(reqfilter)
app.get('/',(req,res)=>{   // this is the example of single route  middleware

    res.send('welcome to Home page');
})


route.get('/users',(req,res)=>{
    res.send('welcome to Userspage page');
})
route.get('/about',(req,res)=>{
    res.send('welcome to about page');
})
app.get('/contact',(req,res)=>{
    res.send('welcome to contact page');
})

app.use('/',route)
app.listen(3000);