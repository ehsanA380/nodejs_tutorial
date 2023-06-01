module.exports=reqFilter=(req,res,next)=>{
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