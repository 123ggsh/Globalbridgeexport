document.addEventListener("DOMContentLoaded", function () {

const yearSpan = document.getElementById("year");

if(yearSpan){
yearSpan.textContent = new Date().getFullYear();
}

});
// ===== Welcome Popup =====

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("welcomePopup").style.display = "flex";
    }, 5000);
});

function closePopup() {
    document.getElementById("welcomePopup").style.display = "none";
}

function openTawkChat() {
    if (typeof Tawk_API !== "undefined") {
        Tawk_API.maximize();
    }
    closePopup();
}
function toggleMenu() {
    var menu = document.getElementById("mobileMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
