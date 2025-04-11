const submitButton = document.querySelector("#submit");
const inputTag = document.querySelector("input");
const list = document.querySelector("ul");

submitButton.addEventListener("click", () => {
  let value = inputTag.value;
  let element = document.createElement("li");
  element.innerHTML =
    value + ' <button onclick="deleteElement(event)">Delete</button>';
  list.appendChild(element);
  inputTag.value = "";
});

function deleteElement(e) {
  e.target.parentElement.remove();
}


