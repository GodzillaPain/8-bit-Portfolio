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
  var aboutMeLink = document.querySelector('#menu a[href="#about-me"]');
  var screenContainer = document.querySelector('.screen-container');
  var aboutPage = document.getElementById('about-me');
  var menu = document.getElementById('menu');

  aboutMeLink.addEventListener('click', function (event) {
    event.preventDefault();

    screenContainer.classList.toggle('expanded');

    menu.style.display = 'none';

    aboutPage.classList.toggle('hide');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var skillsLink = document.querySelector('#menu a[href="#skills"]');
  var screenContainer = document.querySelector('.screen-container');
  var skillsPage = document.getElementById('skills'); // Updated to use getElementById
  var menu = document.getElementById('menu');

  skillsLink.addEventListener('click', function (event) {
    event.preventDefault();

    // Toggle the 'expanded' class on screenContainer
    screenContainer.classList.toggle('expanded');

    // Hide the menu
    menu.style.display = 'none';

    // Toggle the 'hide' class on skillsPage
    skillsPage.classList.toggle('hide');
  });
});


function goBack() {
  console.log("Button clicked");

  var menu = document.getElementById("menu");
  var title = document.querySelector(".title");
  var screenContainer = document.querySelector(".screen-container");
  var aboutPage = document.getElementById("about-me");
  var skillsPage = document.getElementById("skills");

  screenContainer.classList.toggle('expanded');

  aboutPage.classList.add('hide');
  skillsPage.classList.add('hide');

  menu.style.display = "block";
}



document.addEventListener("DOMContentLoaded", function() {
  const image1 = document.querySelector(".bit1");
  const image2 = document.querySelector(".bit2");

  setInterval(() => {
    if (image1.classList.contains("hide")) {
      image1.classList.remove("hide");
      image2.classList.add("hide");
    } else {
      image1.classList.add("hide");
      image2.classList.remove("hide");
    }
  }, 1000); 
});
