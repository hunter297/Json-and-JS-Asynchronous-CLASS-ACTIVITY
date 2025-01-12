let user2 = {
    password: "xxxxx",
    Email: "Folorunshoedid@gmail.com",
    first_name: "Folorunsho",
    username: "Black Lord",
}

let myjson = JSON.stringify(user2)
    console.log(myjson.Email)


let newObj = JSON.parse(myjson)

console.log(myjson)
console.log(newObj)

function greet(name, callback) {
    console.log("hello," + name)
    callback();
};


function goodbye() {
    console.log("goodbye!")
}
greet("10X speed", goodbye);