let a=10;
let b=0;

setTimeout(() => {
    // console.log("logic exe...");
    b=90;
}, 2000);

/// drawback of asynchronous 
console.log(a+b);

