const person = {firstName: "jogn", lastName:"doe", age:46}

console.log(person.firstName); 
console.log(person.lastName);
console.log(person.age); 

const ppl = ["alan", "kenny", "brennan", "chris"]; 

console.log(ppl.length); 
ppl.sort(); 

console.log(ppl); 

const fruits = ["apples", "bannanas", "pears", "mango"]

let text = "ul"; 
fruits.forEach(thisFunction);
text += "ul"; 

function thisFunction(value){
    text += "<li>" + value + "</li>";
}

console.log(fruits); 