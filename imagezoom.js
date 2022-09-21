// On click of an image

function zoomimage(image,alt){
    console.log("Clicked image " + image);


    // Get the modal and components
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalimg");
    var captionText = document.getElementById("modalcaption");

    // Set display (to make not invisible)
    modal.style.display = "block";

    // Set image and caption
    modalImg.src = 'images/'+image;
    captionText.innerHTML = alt;
}



// When the user clicks on <span> (x), close the modal
function closemodal() {
    
    // Get the modal
    var modal = document.getElementById("modal");

    // Set display to none
    modal.style.display = "none";
}