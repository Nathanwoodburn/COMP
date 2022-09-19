// Add an observer to check when divs are visible on screen


const observer = new IntersectionObserver((entries) => {
    // For each div with the hidden tag
    entries.forEach((entries) => {
        // if the div is on screen
        if (entries.isIntersecting) {
            // Add the show tag which animates it on screen
            entries.target.classList.add('show');
        }
    });
});

// Get hidden divs
const hiddenDivs = document.querySelectorAll('.hidden');
// For each hidden div, check if it is visible
hiddenDivs.forEach((el) => observer.observe(el));