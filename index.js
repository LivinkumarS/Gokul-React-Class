// DOM-Document Object Model
// DOM is used to manipulate the HTML elements in a webpage

// Selecting

// Id

// .getElementById("Id name")

// let h2 = document.getElementById("head2");

// console.log(h2);

// Class name

// let h2 = document.getElementsByClassName("head2");

// console.log(h2);

// tag name

// let h2 = document.getElementsByTagName("h2");

// console.log(h2);

// Query Selector

// let element = document.querySelector(".head2");

// console.log(element);

// Query selector all

// let elements = document.querySelectorAll("h2");
// console.log(elements);

// Changing Contents

// console.log(h2.textContent);

// h2.textContent = "Good Bad Ugly!";
// console.log(h2.textContent);
// console.log(h2.innerHTML);

// h2.innerHTML = "<p>Good Bad Ugly!</p>";

// Styling

// h2.style.backgroundColor = "red";
// h2.style.padding = "20px";

// Class name manipulation

// console.log(h2.classList);

// h2.classList.add("try");
// h2.classList.remove("head2")

// h2.classList.toggle("head2");

// Attribute Manipulation

// const h2 = document.querySelector("#head2");

// console.log(h2.getAttribute("id"));
// h2.setAttribute("id","head")

// document.querySelector("a").setAttribute("href", "https://www.google.com");

// Removing

// h2.remove();

// Creating Elements
// const div = document.createElement("div");
// div.textContent = "Something!";
// div.classList.add("Hello");
// console.log(div);

// document.querySelector("body").appendChild(div);

// Event Listeners

// const btn = document.querySelector("button");
// const h2 = document.querySelector("h2");
// btn.addEventListener("click", () => {
//   h2.textContent = "Clicked";
//   h2.style.color = "aqua";
// });

// const model = () => {
//   h2.textContent = "Clicked";
//   h2.style.color = "aqua";
// };
