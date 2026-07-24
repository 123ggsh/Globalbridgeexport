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
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}
// Move Tawk.to widget upward
var Tawk_API = Tawk_API || {};

Tawk_API.onLoad = function () {
    Tawk_API.customStyle = {
        visibility: {
            desktop: {
                xOffset: 30,
                yOffset: 140
            },
            mobile: {
                xOffset: 20,
                yOffset: 170
            }
        }
    };
};
