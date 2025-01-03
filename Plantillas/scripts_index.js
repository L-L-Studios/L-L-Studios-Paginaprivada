
const navbarToggler = document.getElementById('navbarToggler');
const navbarLinks = document.getElementById('navbarLinks');
navbarToggler.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


console.clear();

document.addEventListener('DOMContentLoaded', () => {
  const body = document.getElementById('mainBody');
  const themeSwitch = document.getElementById('themeSwitch');
  const themeImage = document.getElementById('themeImage');

  themeSwitch.addEventListener('change', () => {
      const isDarkMode = themeSwitch.checked;
      body.classList.toggle('dark-mode', isDarkMode);

      themeImage.src = isDarkMode
          ? "Images/fondo-negro-camara-rojo.jpg" 
          : "Images/fondo-blanco-camara.jpg"; 
  });
});


const wrapper = document.querySelector('.wrapper');

let clickTimeout;

wrapper.addEventListener('click', function () {
  clickTimeout = setTimeout(() => {
    if (!this.classList.contains('zoomed')) {
      this.classList.add('zoomed'); 
    }
  }, 250); 
});


const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const isCircle = event.target.closest('.circle');
    if (!isCircle) {
      const circle = card.querySelector('.circle');
      const icon = card.querySelector('.icon-img');
      
      circle.classList.toggle('moved');
      icon.classList.toggle('rotate');
    }
  });
});


function copiarEnlace(boton) {
  const enlace = boton.parentElement.querySelector(".cardPort__enlaces").textContent;

  navigator.clipboard.writeText(enlace).then(() => {
    boton.classList.add("show-tooltip");

    setTimeout(() => {
      boton.classList.remove("show-tooltip");
    }, 2000);
  }).catch(err => {
    console.error("Error al copiar el enlace: ", err);
  });
}

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

/*document.addEventListener("keydown", function (e) {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
      e.preventDefault();
  }
});*/