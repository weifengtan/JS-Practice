const container = document.querySelector("#container");

const content = document.createElement("div"); 
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redP = document.createElement("p");
redP.setAttribute(
    "style",
    "color: red"
);
redP.classList.add("red-paragraph");
redP.textContent = "Hey I'm red!"; 
container.appendChild(redP);

const headerThree = document.createElement("h3");
headerThree.classList.add("blue-h3");
headerThree.textContent = "I'm a blue h3!";
headerThree.setAttribute(
    "style",
    "color: blue"
);
container.insertBefore(headerThree, content);

const div = document.createElement("div");
div.classList.add("black-border-div");
div.setAttribute(
    "style",
    "border: 4px solid black; background-color: pink"
);

const headerOne = document.createElement("h1");
headerOne.classList.add("black-div-h1");
headerOne.textContent = "I'm in a div";
div.appendChild(headerOne); 

const blackDivP = document.createElement("p");
blackDivP.classList.add("black-div-p");
blackDivP.textContent = "ME TOO!"
div.appendChild(blackDivP); 

container.appendChild(div); 

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World"); 