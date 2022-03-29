// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "wt-bar" + " wt-card" + " wt-animate-top" + " wt-white";
    } else {
        navbar.className = navbar.className.replace(" wt-card wt-animate-top wt-white", "");
    }
}