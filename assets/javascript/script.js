addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    logo.addEventListener("dragstart", function(e) {
        e.preventDefault();
    });
    logo.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
});