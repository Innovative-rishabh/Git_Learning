// <li>TS</li>
// function attach(content){
// const element1=document.createElement('li');
// element1.innerHTML=content;
// const element2=document.createElement('li');
// element2.innerHTML=content+" V2.0";


// const parent=document.getElementById("root");
// parent.append(element1,element2);

// };


// attach("TS");
// attach("React");
// attach("Node.js");


// const textNode=document.createTextNode("hello Rishabh");
// const parent=document.getElementById("root");
// parent.appendChild(textNode);   


// const attribute=document.createAttribute('id');
// attribute.value="unique-id";

// const  access=document.querySelector('li');

// access.setAttributeNode(attribute);

// access  to 2nd list for changing its attribute

// const attribute=document.createAttribute('id');
// attribute.value="New-ID"
// const parent=document.getElementById("root");
// parent.children[1].setAttributeNode(attribute);


//accessing attributes of an element

// const element1=document.getElementById("root");
// console.log(element1.getAttribute("id"));

// const element=document.getElementById("root");
// console.log(element.setAttribute("WTF","20"));
// element.removeAttribute("WTF");


//Add nodes to the DOM

// const parent=document.getElementById("root");

// const element=document.createElement('li');

// element.innerHTML="TS";

// const child2=parent.children[1];
// parent.replaceChild(element,child2);

// const parent=document.getElementById("root");
// // parent.innerHTML+="<li>TS</li>";

// const element=document.createElement("div");
// element.innerHTML="Hello Coder Army";
// parent.insertAdjacentHTML("beforebegin",element);
// parent.insertAdjacentHTML"afterbegin",element);
// parent.insertAdjacentHTML("beforeEnd",element);
// parent.insertAdjacentHTML("afterend",element);


const parent=document.getElementById("root");

parent.removeChild(parent.children[0]);
