// 🎯 Part 1: JavaScript Basics — Variables, Conditionals
function greetUser() {
  const name = prompt("What is your name?");
  if (name) {
    document.getElementById("greeting").textContent = `Hello, ${name}! 👋`;
  } else {
    document.getElementById("greeting").textContent = "Please enter your name next time.";
  }
}

// ❤️ Part 2: Functions — Reusable Logic

// Function 1: Sum of two numbers
function calculateSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = sum(num1, num2);
  document.getElementById("sumResult").textContent = `Sum: ${result}`;
}

// Reusable sum function
function sum(a, b) {
  return a + b;
}

// Function 2: Toggle content visibility
function toggleBox() {
  const box = document.getElementById("toggleBox");
  box.classList.toggle("hidden");
}

// 🔁 Part 3: Loops — Iteration

// Example 1: Loop through array of fruits
function showFruits() {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape", "🍓 Strawberry"];
  const list = document.getElementById("fruitList");
  list.innerHTML = ""; // Clear list before adding

  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
}

// Example 2: While loop countdown (logged to console)
function countdown(start = 5) {
  let count = start;
  while (count > 0) {
    console.log("Countdown:", count);
    count--;
  }
  console.log("Blast off! 🚀");
}

// 🌐 Part 4: DOM Manipulation Examples
// 1. Modify text content (greeting)
// 2. Create list items dynamically (showFruits)
// 3. Toggle visibility of a box (toggleBox)
// 4. Update sum result (calculateSum)
// 5. Log countdown to console (countdown)
// 6. Prompt user for input (greetUser)

// Event listeners for buttons