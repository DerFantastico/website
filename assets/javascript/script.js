addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    logo.addEventListener("dragstart", function(e) {
        e.preventDefault();
    });
    logo.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
});

if(location.href.includes("fantastico.nrfy.net")) {
    if(location.href.endsWith(".html")) {
        window.history.pushState(location.href.replaceAll(".html",""));
    }
}