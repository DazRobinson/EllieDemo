// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("wt-show") == -1) {
        x.className += " wt-show";
    } else {
        x.className = x.className.replace(" wt-show", "");
    }
}