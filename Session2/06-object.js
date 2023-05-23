//object is a data structure
//data is stored in obbject in the form of key:value pair 

let person = {
    name: "John",
    age: 30,
    city: "New York",
    address: {fno:1132, street:"abc", pincode:121234},
    hobbies: ["Painting", "Music", "Playing"],
    display:function(){
        console.log("this is an object's function")
    }
}

//destructur object

console.log(person)
console.log(typeof(person))

let {name, age, city, address} = person
console.log(name)
console.log(age)
console.log(city)
console.log(address)




let array = [10,20,30,40,50]
//let a = arr[0]
//let b = arr[1]
//let c = arr[2]
//let d = arr[3]
//let e = arr[4]


//selective array destructuring
let[a,b,,,e] = arr
