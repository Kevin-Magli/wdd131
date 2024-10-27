// font-picker.js

// Assuming you have already imported your fonts JSON
// fonts.js
const fonts = [
    { name: "Arial", value: "'Arial', sans-serif" },
    { name: "Helvetica", value: "'Helvetica', sans-serif" },
    { name: "Times New Roman", value: "'Times New Roman', serif" },
];


// Populate the font picker select element
const fontPicker = document.getElementById('font-picker');
const fontText = document.querySelector('.font-text');

// Populate the select options with the font data
fonts.forEach(font => {
    const option = document.createElement('option');
    option.value = font.value; // Use the CSS value for the font
    option.textContent = font.name; // Use the display name for the user
    fontPicker.appendChild(option);
});

// Event listener to change the font on selection
fontPicker.addEventListener('change', (event) => {
    const selectedFont = event.target.value; // Get the selected font value
    fontText.style.fontFamily = selectedFont; // Apply the selected font to the text
});
