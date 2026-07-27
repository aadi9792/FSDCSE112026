// console.log("Hello, World! This is the FSDCSEE122026 module.");
// console.log("This module is designed to demonstrate basic JavaScript functionality.");

// let a = 34;
// if(a>10){
//    let a = 40;
//    console.log("HI a inside the block :" + a);
// }
// console.log("HI a outside the block :" + a);
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 10));

// const sum = (a, b) => { return a + b; };
// console.log(sum(5, 10));

// const data = function(msg){
//     console.log("HEllo,I'm using js " +msg);
// }
// data("and Node");

// (()=>{console.log("Hello using and calling by IIFE")})();

// callback
// function sum(a,b){
//     return a+b;
// }

// function sumWithmsg(clbk,msg){
//     const result = clbk(5, 10);
//     console.log("Hey ,Your result "+result+"!! Well Done "+msg);
// }

// sumWithmsg(sum,"Aditya");

function login(msg,error){
    if(error){
        console.log("Error is: "+error);
    }
    else{
        console.log(msg);
    }
}

function loginhandler(username,password,clbk){
    if(username == "admin" && password == "12345"){
        clbk("Login successful!", null);
    }
    else{
        clbk(null, "Invalid username or password");
    }
}

loginhandler("admin", "12345", login);
loginhandler("user", "11111", login);