function toggleMenu(event) {
    console.log("Function called");

    var menu = document.getElementById("menu");
    var title = document.querySelector(".title");
    var screenContainer = document.querySelector(".screen-container");

    // Check if the click event occurred on the button
    if (event.target.id === 'startButton') {
        console.log("Before toggling - Menu display: ", menu.style.display);
        console.log("Before toggling - Title display: ", title.style.display);
        menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
        title.style.display = (title.style.display === "none" || title.style.display === "") ? "block" : "none";
        console.log("After toggling - Menu display: ", menu.style.display);
        console.log("After toggling - Title display: ", title.style.display);
    }
}
    document.addEventListener('DOMContentLoaded', function () {
    var menuLinks = document.querySelectorAll('#menu a');
    var screenContainer = document.querySelector('.screen-container');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            screenContainer.classList.toggle("expanded");
        });
    });
});

