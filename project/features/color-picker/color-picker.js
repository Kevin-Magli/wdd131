// Main variables
const colorPickerContainer = document.querySelector('.color-picker-container');
const addColorButton = document.getElementById('color-add-button');
const initialColorPicker = document.querySelector('.color-picker'); // Select the initial color picker

// Function to add the event listener to update hex values
function attachHexUpdateListener(colorPicker, hexDisplay) {
    colorPicker.addEventListener('input', () => {
        hexDisplay.textContent = colorPicker.value;
    });
}

// Initial setup for the first color picker
function initializeFirstColorPicker() {
    const initialHexValue = document.querySelector('.hex-value');
    attachHexUpdateListener(initialColorPicker, initialHexValue);
}

// Function to create and add a new color picker
function addColorPicker() {
    // Create new div for color picker
    const newColorContainer = document.createElement('div');
    newColorContainer.classList.add('color-container');

    // Create new input color picker
    const newColorPicker = document.createElement('input');
    newColorPicker.type = 'color';
    newColorPicker.value = '#ffffff';
    newColorPicker.classList.add('color-picker'); // Add class for styling

    // Create new paragraph to display the hex value
    const hexValue = document.createElement('p');
    hexValue.classList.add('hex-value'); // Add class for styling
    hexValue.textContent = newColorPicker.value;

    // Attach event listener to update hex value on input change
    attachHexUpdateListener(newColorPicker, hexValue);

    // Add color picker and hex value display to the container
    newColorContainer.appendChild(newColorPicker);
    newColorContainer.appendChild(hexValue);

    // Insert the new color picker before the add button
    colorPickerContainer.insertBefore(newColorContainer, addColorButton);
}

// Event for the '+' button
addColorButton.addEventListener('click', addColorPicker);

// Initialize the first color picker
initializeFirstColorPicker();
