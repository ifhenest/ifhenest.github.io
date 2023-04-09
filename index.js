/* // Para que tengas que cerrar el nav. Opción 1:


const checkBtn = document.querySelector('.checkbtn');

checkBtn.addEventListener('click', function() {
  body.classList.toggle('body-fixed');
});

*/

/* opción 2,  problema que con esto cuando abrir el nav se mueve todo un poco
const checkbox = document.getElementById("check");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

*/


/// Transiciones nulas en redimensionamiento de la página 

let resizeTimeout;

		function addNoAnimationClass() {
			document.body.classList.add('no-animation');
		}

		function removeNoAnimationClass() {
			document.body.classList.remove('no-animation');
		}

		window.addEventListener('resize', () => {
			clearTimeout(resizeTimeout);
			addNoAnimationClass();
			resizeTimeout = setTimeout(removeNoAnimationClass, 250);
		});

///Video Youtube

// Seleccionar todas las imágenes de los videos
var imagenes = document.querySelectorAll('.videos img');

// Agregar evento de click a cada imagen
for (var i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
    var videoId = this.parentElement.href.split('/').pop(); // Obtener el ID del video de la URL del enlace
    var videoHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>'; // Crear HTML del reproductor de video
    document.getElementById('popup').innerHTML = videoHtml; // Insertar HTML en el popup
    document.getElementById('popup').classList.add('activo'); // Mostrar el popup
  });
}

// Agregar evento de click al popup para cerrarlo
document.getElementById('popup').addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
  document.getElementById('popup').innerHTML = ''; // Eliminar contenido del popup
  document.getElementById('popup').classList.remove('activo'); // Ocultar el popup
});


// Desactivar hover cuando hay scroll y cuanto tiempo

var body = document.body,timer;
window.addEventListener('scroll', function() {
   clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
   timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },700);
}, false);




window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: '.carousel__indicadores',
            arrows: {
                prev: '.carousel__anterior',
                next: '.carousel__siguiente',
            }, 
            responsive: [
                {
                  // screens greater than >= 450px
                  breakpoint: 450,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },{
                  // screens greater than >= 800px
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                }
              ]
    });
});
