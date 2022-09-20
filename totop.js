// Select To Top Div
var totop = document.getElementById('totop');

// On click scroll to top of page
totop.onclick = function() {
    window.scrollTo(0, 0);
};

// Make button only show when page scrolled down a bit

// Whenever the window scrolls run the function
window.onscroll = function() {scrollFunction()};

// When scroll
function scrollFunction() {

    // if the scroll is at least 500 pixel from the top
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        // Show the To Top button

        // Transition delay needs to be there to stop the visibility messing with the fade
        totop.style.transitionDelay = "0ms"
        totop.style.visibility = "visible";
        totop.style.opacity = "1";
    } else {
        // Hide the To Top button when the page scroll is near the top

        // Reset transition delay to allow smooth transition
        totop.style.transitionDelay = ""

        // Set invisible
        totop.style.visibility = "hidden";
        totop.style.opacity = "0";
    }
}