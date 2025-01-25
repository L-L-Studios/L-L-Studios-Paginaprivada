
console.clear();

document.addEventListener("DOMContentLoaded", () => {
  /*---MODO CLARO Y MODO OSCURO CON SWITCH---*/
  const body = document.getElementById('mainBody');
  const themeSwitch = document.getElementById('themeSwitch');
  const themeImage = document.getElementById('themeImage');

   // Alternar entre modo oscuro y claro
  themeSwitch.addEventListener('change', () => {
    const isDarkMode = themeSwitch.checked;
    body.classList.toggle('dark-mode', isDarkMode);

    // Cambiar imagen según el tema
    themeImage.src = isDarkMode
        ? "Images/fondo-negro-camara-rojo.jpg" // Imagen para tema oscuro
        : "Images/fondo-blanco-camara.jpg"; // Imagen para tema claro
  });

  /* ----ANIMACION SCROLL----*/ 
  const bgTarjetas = document.querySelectorAll(".bgTarjeta");
  const gradient_cards = document.querySelectorAll(".gradient_cards");
  const cardPort = document.querySelectorAll(".cardPort");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("visible"); // Elimina la clase para reiniciar la animación
        void entry.target.offsetWidth; // Forzar el reflujo para reiniciar la animación
        entry.target.classList.add("visible"); // Agrega la clase nuevamente
      }
      else {
        // Restablecer la animación si el scroll sube o baja
        entry.target.classList.remove('visible');
        entry.target.classList.add('hidden');
    }
    });
  }, { threshold: 0.1 }); // Se activa cuando el 10% de la tarjeta es visible

  bgTarjetas.forEach((bgTarjeta) => observer.observe(bgTarjeta));
  gradient_cards.forEach((gradient_cards) => observer.observe(gradient_cards));
  cardPort.forEach((cardPort) => observer.observe(cardPort));

});


/*--------FUNCION PARA ALTERNAR EL BOTON TOGLE MENU--------*/
// Seleccionar elementos
const navbarToggler = document.getElementById('navbarToggler');
const navbarLinks = document.getElementById('navbarLinks');

// Alternar el menú al presionar el botón
navbarToggler.addEventListener('click', () => {
  navbarLinks.classList.toggle('active'); // Activa o desactiva el menú
});


/*-------- SELECCIONAR CON UN CLICK AGRANDAR IMAGEN, DOBLE CLICK DEBE APARECER  */ 
// Selecciona el contenedor de la imagen
let clickTimeout;
const wrapper = document.querySelector('.wrapper');
const tituloLLStudio = document.querySelector('.titulo-LLstudios');

wrapper.addEventListener('click', function () {
  // Usa un timeout para diferenciar entre clic y doble clic
  clearTimeout(clickTimeout); // Asegura que no haya otros timeouts activos
  clickTimeout = setTimeout(() => {
    if (!this.classList.contains('zoomed')) {
      this.classList.add('zoomed'); // Activa el zoom si no está ya activo
    }
  }, 250); // Espera 250ms para verificar si es doble clic

  // Mostrar el título si está oculto
  if (tituloLLStudio.classList.contains('hidden')) {
    tituloLLStudio.classList.remove('hidden');
    tituloLLStudio.style.visibility = 'visible';
    tituloLLStudio.style.opacity = 1;
  }

  // Inicia la primera animación
  tituloLLStudio.classList.add('tituloAparicion');

  // Al terminar la primera animación, inicia la segunda
  tituloLLStudio.addEventListener(
    'animationend',
    (event) => {
      if (event.animationName === 'tituloAparicion') {
        tituloLLStudio.classList.remove('tituloAparicion');
        tituloLLStudio.classList.add('lightEffect');
      }
    },
    { once: true } // Se ejecuta solo una vez
  );
});


// Evento de doble clic para deshacer el zoom
wrapper.addEventListener('dblclick', function () {
  clearTimeout(clickTimeout); // Cancela el timeout del clic único
  if (this.classList.contains('zoomed')) {
    this.classList.remove('zoomed'); // Desactiva el zoom
  }
});


// Seleccionar todas las tarjetas
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    // Verifica que no se haya clicado en el círculo o ícono
    const isCircle = event.target.closest('.circle');
    if (!isCircle) {
      const circle = card.querySelector('.circle');
      const icon = card.querySelector('.icon-img');
      
      // Mover el círculo y agregar rotación al ícono
      circle.classList.toggle('moved');
      icon.classList.toggle('rotate');
    }
  });
});


/* FUNCION PARA COPIAR ENLACE*/
function copiarEnlace(boton) {
  // Encuentra el enlace correspondiente al botón clicado
  const enlace = boton.parentElement.querySelector(".cardPort__enlaces").textContent;

  navigator.clipboard.writeText(enlace).then(() => {
    // Agrega la clase para mostrar el tooltip
    boton.classList.add("show-tooltip");

    // Elimina la clase después de 2 segundos
    setTimeout(() => {
      boton.classList.remove("show-tooltip");
    }, 2000);
  }).catch(err => {
    console.error("Error al copiar el enlace: ", err);
  });
}

document.querySelector('.cardCont').addEventListener('click', () => {
  const icon = document.querySelector('.icon');
  
  // Agrega la clase que activa la animación
  icon.classList.add('active');

  // Remueve la clase después de un tiempo (ajusta el tiempo según la duración de la animación)
  setTimeout(() => {
      icon.classList.remove('active');
  }, 5000);
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
