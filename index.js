// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue"; 
}

// Function to reset the background color when the button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  document.getElementById('keyPressDisplay').textContent = `You pressed: ${event.key}`;
}

// Process Text Input
// Function to display user input in real-time
function displayUserInput() {
  const userInput = document.getElementById('textInput').value;
  document.getElementById('textInputDisplay').textContent = userInput;
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor);

// Attach event listener to reset background color when the button is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor);

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress);

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput);
