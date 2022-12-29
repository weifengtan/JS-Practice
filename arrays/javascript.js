const person = {firstName: "jogn", lastName:"doe", age:46}

console.log(person.firstName); 
console.log(person.lastName);
console.log(person.age); 

const ppl = ["alan", "kenny", "brennan", "chris"]; 

console.log(ppl.length); 
ppl.sort(); 

console.log(ppl); 

ppl.push("bob");

console.log(ppl); 

ppl[6] = "Martin"; 

console.log(ppl);

console.log(Array.isArray(ppl));

console.log(ppl.toString());

console.log(ppl.join("-")); 

console.log(ppl.pop()); 

console.log(ppl.push("Martine"));

console.log(ppl);

console.log(ppl.shift());

console.log(ppl);

console.log(ppl.unshift("Joe")); 

console.log(ppl); 

const notppl = ["spiderman", "batman", "bat", "peeta"]; 

const pplAndnotppl = ppl.concat(notppl); 

console.log(pplAndnotppl); 

const animals = ["pig", "bear", "fish", "dog", "cat"]; 

const everything = animals.concat(ppl, notppl); 

console.log(everything); 

const fruits = ['Banna', 'apple', 'pear', 'mango', 'potato']; 

fruits.splice(0,0);

console.log(fruits); 

const fruits2 = fruits.slice(2); 

console.log(fruits2); 