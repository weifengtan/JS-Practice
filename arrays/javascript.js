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