// Step 1: Double this line
var rangeInput = document.querySelector('input[type="range"][data-ref="progressBar"]');

// Step 2
function setVideoProgress(value) {
  // Select the range input element

  if (rangeInput) {
    // Ensure the value is within the range's bounds
    let max = rangeInput.max;
    let min = rangeInput.min || 0;
    
    if (value >= min && value <= max) {
      // Set the new value to the passed-in value
      rangeInput.value = rangeInput.max - 1;

      // Create and dispatch the 'input' and 'change' events
      let inputEvent = new Event('input', { bubbles: true });
      let changeEvent = new Event('change', { bubbles: true });

      rangeInput.dispatchEvent(inputEvent);
      rangeInput.dispatchEvent(changeEvent);

      console.log("Slider value set to: " + rangeInput.value);
    } else {
      console.log("Value is out of bounds. Please set a value between " + min + " and " + max + ".");
    }
  } else {
    console.log("Range input element not found.");
  }
}

// Step 3
setInterval(function(){setVideoProgress(100)},1000);

// Step 4
setInterval(function(){document.getElementById("next").click();},1000);
