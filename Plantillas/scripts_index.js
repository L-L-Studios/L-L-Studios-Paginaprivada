/*--------FUNCION PARA ALTERNAR EL BOTON TOGLE MENU--------*/
// Seleccionar elementos
const navbarToggler = document.getElementById('navbarToggler');
const navbarLinks = document.getElementById('navbarLinks');

// Alternar el menú al presionar el botón
navbarToggler.addEventListener('click', () => {
  navbarLinks.classList.toggle('active'); // Activa o desactiva el menú
});


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
