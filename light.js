// JS to load light.css for light mode view


function lightclick() { 
  
    // Toggle light mode Cookie
    if(getCookie("light") == "TRUE"){
        document.cookie = "light=FALSE";
        // Reload the page to remove inserted CSS. It is much easier than trying to remove it with code
        location.reload();
        return
    }
    // If light mode then add css
    addcss();

}

function addcss() {

    // Get the head location in page
    var head = document.getElementsByTagName('head')[0]
      
    // Creating link element to add css
    var style = document.createElement('link') 
    style.href = 'css/light.css'
    style.type = 'text/css'
    style.rel = 'stylesheet'
    head.append(style);
      
    // Save a cookie to store the light mode state
    document.cookie = "light=TRUE";

    // Change light mode button text
    document.querySelector('#lightbutton').textContent = 'Dark Mode';
}

// On page load check if light mode selected
function checklight() {
    // If light mode add CSS for it
    if (getCookie("light") == "TRUE")
        addcss();
}

// From https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        // Log result to console for testing and return result
        console.log("Light mode: " + c.substring(name.length, c.length));
        return c.substring(name.length, c.length);
      }
    }
    return "";
}