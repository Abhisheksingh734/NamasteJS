// JavaScript uses JIT compilation (Interpreter + compiler)



//Arrow function and normal function------------

// getName();
// console.log(x);
// console.log(getName);

// var x = 4;

// function getName(){
//     console.log("hello");
// }

// var getName = () => {
//     console.log("hello");
// }

// hown function works in JavaScript------------------

// var x =1;

// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }


//---Scope chain in JS

// function a(){
//     var ba =28; 

//     b();
//     function b(){
//         console.log(ba);

//     }
// }

// a();


// -------BLOCK SCOPE

// {
//     console.log(a);
// console.log(b);
// console.log(c);
//     var a = 10;
//     let b = 39;
//     const c = 45;
    

// }

// console.log(a);
// console.log(b);
// console.log(c);




//setTimeout()

function x(){
    let i=1;
    setTimeout(function (){
        console.log(i);
    },3000);
    console.log("Namaste bhai");

}
x();