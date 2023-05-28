const express = require('express')
const path = require('path');
// const ejs = require('ejs');
const app = express();
const port = 3000

const view_path= path.join(__dirname,'./viewstr');
console.log(view_path);

app.set('view engine','ejs');
app.set('views',view_path)

app.get('/profile', (req, res) => {
  const user = {
    name:'Ehsan Ansari',
    email:'ehsna@3.com',
    city:'Ghazipur',
    skill:['php','c++','python','java','c#']
  }
  res.render('profile',{user});
})
app.get('/login',(req,res)=>{
  res.render('login');
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))