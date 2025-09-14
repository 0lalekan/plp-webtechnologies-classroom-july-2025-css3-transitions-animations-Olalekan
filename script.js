// Function to format message (demonstrates parameters + return)
function createMessage(name) {
  return `Hello, ${name}! Welcome to the animation demo 🎬`;
}

// Function showing local vs global scope
let globalVar = "I am global!";
function scopeDemo() {
  let localVar = "I am local!";
  console.log(globalVar); // accessible
  console.log(localVar);  // accessible only inside
}
scopeDemo();

// DOM elements
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");

// Function to add animation
function animateBox() {
  box.classList.add("move");
  alert(createMessage("Student")); // Reuse function here
}

// Function to reset animation
function resetBox() {
  box.classList.remove("move");
  box.style.transform = "translateX(0) rotate(0)";
}

// Event Listeners
animateBtn.addEventListener("click", animateBox);
resetBtn.addEventListener("click", resetBox);
