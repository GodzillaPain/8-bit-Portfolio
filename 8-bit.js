function toggleMenu(event) {
  console.log("Function called");

  var menu = document.getElementById("menu");
  var title = document.querySelector(".title");
  var screenContainer = document.querySelector(".screen-container");
  var aboutPage = document.getElementById("about-me");

  if (event.target.id === 'startButton') {
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";


    title.classList.toggle("hide");

  }
}


document.addEventListener('DOMContentLoaded', function () {
  var menuLinks = document.querySelectorAll('#menu a');
  var screenContainer = document.querySelector('.screen-container');
  var aboutPage = document.getElementById('about-me');
  var menu = document.getElementById('menu');

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // Toggle the 'expanded' class on screenContainer
      screenContainer.classList.toggle('expanded');

      // Hide the menu
      menu.style.display = 'none';

      // Toggle the 'hide' class on aboutPage
      aboutPage.classList.toggle('hide');
    });
  });
});


