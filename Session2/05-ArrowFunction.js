// What are the different types of functions
//1. Named Function

function sayhello(){
    console.log("This is Named Function")
}
//2. Anonymous Function
let myfun = function(){
    console.log("This is Anonymous Function")
}
//3.Arrow Function in ES6

let sum = (x,y)=> x+y 

console.log(sum(10,20))

let msg =()=> console.log("this is an arrow function")
msg()

let arr = [10,[40,20], {x:10, y:20}, "30", true, 40, 50], function(){console.log("this is an arrow function")}
let arr1 = ["Priya", "Manish", "Ruchi"]
//callback: when function is passed as argument
//forEach is used to iterate over the arr
let newarr = arr1.map((i)=>("Hi "+i))
console.log(newarr)


