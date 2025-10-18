/** Como están todas las funciones en el mismo documento js 
utilizo esta función para poder saber en que pagina estoy**/

function obtenerNombreDeArchivo(ruta) {
    // Función auxiliar para detectar el nombre de archivo (ej. 'index.html')
    return ruta.substring(ruta.lastIndexOf('/') + 1);
}
const nombreDeArchivoActual = obtenerNombreDeArchivo(window.location.pathname.toLowerCase());
mostrarBienvenida(nombreDeArchivoActual);

// FUNCIÓN DE BIENVENIDA para la página de inicio.
function mostrarBienvenida(nombreDeArchivo) {
    if (nombreDeArchivo === 'index.html' || nombreDeArchivo === '') {
        alert("¡Bienvenido/a a nuestra página web! Esperamos que disfrutes tu visita.");
    }
}

// FUNCIÓN en Mostrar más ./noticiasrelacionadas.html - oculta texto onclick
function alternarVisibilidad(idSeccion, boton) {
    const seccion = document.getElementById(idSeccion);
    if (seccion) {
        const estaOculta = seccion.classList.contains('oculto');
        if (estaOculta) {
            seccion.classList.remove('oculto');
            boton.textContent = '– Ocultar Noticias';
        } else {
            seccion.classList.add('oculto');
            boton.textContent = '+ Mostrar Más Noticias';
        }
    }
}

// FUNCIÓN: Resaltar texto en ./agenda.html - cambiar estilo texto onclick
function resaltarComida(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        if (elemento.style.textDecoration === 'underline') {
             elemento.style.textDecoration = 'none';
             elemento.style.color = 'black';
        } else {
             elemento.style.textDecoration = 'underline';
             elemento.style.color = 'blue';
        }
    }
}

// Función: Página expositores.html (Resaltar Filas)
function inicializarExpositores() {
    document.addEventListener('DOMContentLoaded', function() {
        const tabla = document.getElementById('categorias');

        if (tabla) {
            // Usamos [0] para asegurarnos de obtener el primer <tbody> si existe
            const tbody = tabla.getElementsByTagName('tbody')[0];
            if (!tbody) return; 

            const filas = tbody.getElementsByTagName('tr');
            
            for (let i = 0; i < filas.length; i++) {
                const fila = filas[i];
                
                fila.addEventListener('mouseover', function() {
                    fila.classList.add('fila-resaltada');
                });

                fila.addEventListener('mouseout', function() {
                    fila.classList.remove('fila-resaltada');
                });
            }
        }
    });
}

// Página contacto_ubicacion.html para mostrar un mapa
function inicializarContacto() {
    document.addEventListener('DOMContentLoaded', function() {
        const activador = document.getElementById('activador-mapa');
        const contenedor = document.getElementById('contenedor-mapa');

        if (activador && contenedor) {
            activador.addEventListener('mouseover', function() {
                contenedor.classList.remove('mapa-oculto');
            });
            activador.addEventListener('mouseout', function() {
                contenedor.classList.add('mapa-oculto');
            });
        }
    });
}

// Uso esta condición para ejecutar el código según la página visitada.
if (nombreDeArchivoActual === 'expositores.html') {
    inicializarExpositores();
} else if (nombreDeArchivoActual === 'contacto_ubicacion.html') {
    inicializarContacto();
}
