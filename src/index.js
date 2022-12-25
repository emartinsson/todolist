import "./style.css";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

console.log("test");
const p = document.createElement("p");
p.textContent = "Test";
const content = document.querySelector(".content");
content.appendChild(p);
