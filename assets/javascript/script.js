addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const logo = document.getElementById("logo");
    const pfeil = document.getElementById("pfeil");
    header.addEventListener("dragstart", function(e) {
        e.preventDefault();
    });
    header.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
    logo.addEventListener("dragstart", function(e) {
        e.preventDefault();
    });
    logo.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
    pfeil.addEventListener("dragstart", function(e) {
        e.preventDefault();
    });
    pfeil.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
});

if(location.href.includes("fantastico.nrfy.net")||location.href.includes(".github.io/")) {
    if(location.href.endsWith(".html")) {
        window.history.pushState({}, document.title, location.href.replaceAll(".html",""));
    }
}