// wait for the page to load
window.onload = function() {
    // get the loader element
    var loader = document.getElementById("loader-wrapper");
    // hide the loader element after 5 seconds
    setTimeout(function() {
        loader.style.display = "none";
    }, 5000);
}