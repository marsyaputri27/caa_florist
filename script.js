
function open_wa(){
    window.open("https://wa.me/6281547568424", "_blank");
}

function open_ig(){
    window.open("https://www.instagram.com/caaa_floristt/profilecard/?igsh=MTZrcDZhcXk0YWlnZg%3D%3D","_blank");
}

function closeDropdown() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = "none";
}

document.querySelector(".dropdown").addEventListener("mouseenter", function () {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = "block";
});

const dropdownMenu = document.getElementById("dropdown-menu");
window.onclick = function(event) {
    if (event.target == dropdownMenu) {
        dropdownMenu.style.display = "none";
    }
}