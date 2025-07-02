addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    const pic = document.getElementById("picture");
    logo.addEventListener("dragstart", function(e) {
        e.preventDefault();
    });
    logo.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
    pic.addEventListener("dragstart", function(e) {
        e.preventDefault();
    });
    pic.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
});

if(location.href.includes("fantastico.nrfy.net")||location.href.includes(".github.io/")) {
    if(location.href.endsWith(".html")) {
        window.history.pushState({}, document.title, location.href.replaceAll(".html",""));
    }
}