/*---MODO CLARO Y MODO OSCURO CON SWITCH---*/
console.clear();

document.addEventListener('DOMContentLoaded', () => {
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
});


/*-------- SELECCIONAR CON UN CLICK AGRANDAR IMAGEN, DOBLE CLICK DEBE APARECER  */ 
// Selecciona el contenedor de la imagen
const wrapper = document.querySelector('.wrapper');

// Agrega variables para controlar los clics
let clickTimeout;

// Evento de clic único para hacer zoom
wrapper.addEventListener('click', function () {
  // Usa un timeout para diferenciar entre clic y doble clic
  clickTimeout = setTimeout(() => {
    if (!this.classList.contains('zoomed')) {
      this.classList.add('zoomed'); // Activa el zoom
    }
  }, 250); // Espera un breve momento para verificar si es doble clic
});

// Evento de doble clic para deshacer el zoom
wrapper.addEventListener('dblclick', function () {
  clearTimeout(clickTimeout); // Cancela el timeout del clic único
  if (this.classList.contains('zoomed')) {
    this.classList.remove('zoomed'); // Desactiva el zoom
  }
});


// Agrega un listener para detectar los clics o toques en el contenedor wrapper
/*document.querySelector('.wrapper').addEventListener('click', function() {
  this.classList.toggle('zoomed'); // Activa o desactiva el zoom
});

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: true
      }
    })
    .to(".image-container img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.inicio",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});*/
