let user = {
    name: "alan",
    address: "119", 
    school: "ucsc",
    "long word": "this is in the long word one", 
}; 

let home = new Object(); 

alert(user.name); 

user.new = "new thing"

alert(user.new); 

alert(user["long word"]) 

alert(user.address)

delete user.address; 

alert(user.address)

let key = prompt('what will you do', "name")

alert(user[key])

let fruit = prompt ("Which fruit to buy?", "apple"); 

let bag = {
    [fruit]: 5, 
};

alert(bag.bannana);

function makeUser(name, age, address, color, skin) {
    return {
        name: name,
        age: age, 
        address, 
        color,
        skin,
    };
}

let cool = makeUser('alan', '18', '119', 'blue', 'brown');
console.log(cool.address)


newOne = {
    name: "cool",
    address: "niceÆ",
    what: "soso", 
}

console.log("name" in newOne); 
console.log("ok" in newOne); 