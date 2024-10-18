// Array of products
const products = [
    {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
    },
    {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
    },
    {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
    },
    {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
    },
    {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
    }
];

// Function to populate select options
function populateProductOptions() {
    const selectElement = document.getElementById('product');

    products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; // Set option value to the product's id
    option.textContent = product.name; // Display the product's name
    selectElement.appendChild(option); // Append the option to the select element
    });
}

// Function to track and display the number of reviews
function trackReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount'); // Get review count from localStorage
    if (!reviewCount) {
    reviewCount = 0; // Initialize review count if not set
    }
    reviewCount = parseInt(reviewCount) + 1; // Increment by 1
    localStorage.setItem('reviewCount', reviewCount); // Store updated count back to localStorage

    // Display the review count
    document.getElementById('review-count').textContent = `Total reviews completed: ${reviewCount}`;
}

// Run the functions when the page loads
window.onload = function() {
    populateProductOptions(); // Populate product select options
    trackReviewCount(); // Track review count
};
