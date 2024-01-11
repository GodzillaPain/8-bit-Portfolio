function toggleMenu(event) {
    console.log("Function called");

    var menu = document.getElementById("menu");
    var title = document.querySelector(".title");
    var screenContainer = document.querySelector(".screen-container");

    if (event.target.id === 'startButton') {
        menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var menuLinks = document.querySelectorAll('#menu a');
    var screenContainer = document.querySelector('.screen-container');
  
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        screenContainer.classList.toggle("expanded");
  
        // Toggle the display of the element with class 'title'
        var title = document.querySelector('.title');
        if (title) {
          title.style.display = (title.style.display === 'none' || title.style.display === '') ? 'block' : 'none';
        }
      });
    });
  });
  

