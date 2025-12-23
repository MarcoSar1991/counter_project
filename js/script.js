// counter intial assignment or value retrieval from storage
let counter = parseInt(localStorage.getItem("counter")) || 0;

// Main container creation
const container = document.createElement("div");
container.className = "counter-container";

// Display creation
const counterDisplay = document.createElement("div");
counterDisplay.className = "counter-value";
counterDisplay.textContent = counter;

// Buttons container creation
const buttonsContainer = document.createElement("div");
buttonsContainer.className = "buttons-container";

// Button "-" creation
const decrementButton = document.createElement("button");
decrementButton.textContent = "−";
decrementButton.dataset.action = "decrement";
// button that starts disabled if is 0
decrementButton.disabled = counter === 0;

// Button "+" creation
const incrementButton = document.createElement("button");
incrementButton.textContent = "+";
incrementButton.dataset.action = "increment";

// Button reset creation
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.dataset.action = "reset";

// Counter update function
function updateCounter() {
  counterDisplay.textContent = counter;

  // Assign false to disabled if counter is 0, otherwise true
  decrementButton.disabled = counter === 0;

  // save counter value
  localStorage.setItem("counter", counter);
}

// increment function
function incrementCounter() {
  counter++;
  updateCounter();
}

// decrement function
function decrementCounter() {
  counter--;
  updateCounter();
}

// reset function
function resetCounter() {
  counter = 0;
  updateCounter();
}

// Event delegation with anonymous callback declared as arrow function
buttonsContainer.addEventListener("click",  (event)  => {
  const action = event.target.dataset.action;

  // check if click has been done on buttons and return in case of undefined
  if (!action) {
    return;
  }

  if (action === "increment") {
    incrementCounter();
  } else if (action === "decrement") {
    decrementCounter();
  } else if (action === "reset") {
    resetCounter();
  }
});

// DOM Building
buttonsContainer.appendChild(decrementButton);
buttonsContainer.appendChild(incrementButton);
buttonsContainer.appendChild(resetButton);

container.appendChild(counterDisplay);
container.appendChild(buttonsContainer);

document.body.appendChild(container);
