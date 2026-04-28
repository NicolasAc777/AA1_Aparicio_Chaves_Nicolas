/**
 * CineReseñas - main.js
 * Lógica de la página principal: búsqueda, filtros y favoritas
 * Autor: AA1_Aparicio_Chaves_Nicolas
 */

'use strict';

/* ================================================================
   BASE DE DATOS LOCAL DE PELÍCULAS
   ================================================================ */
const peliculas = [
    {
        id: 1,
        titulo: "Dune: Parte Dos",
        genero: "ciencia-ficcion",
        anio: 2024,
        calificacion: 8.5,
        fecha: "2024-03-01",
        poster: "img/posters/dune2.jpg",
        sinopsis: "Paul Atreides se une a los Fremen para vengar la destrucción de su familia.",
        director: "Denis Villeneuve",
        duracion: "166 min"
    },
    {
        id: 2,
        titulo: "Oppenheimer",
        genero: "drama",
        anio: 2023,
        calificacion: 8.9,
        fecha: "2023-07-21",
        poster: "img/posters/oppenheimer.jpg",
        sinopsis: "La historia del físico J. Robert Oppenheimer y la bomba atómica.",
        director: "Christopher Nolan",
        duracion: "180 min"
    },
    {
        id: 3,
        titulo: "The Batman",
        genero: "accion",
        anio: 2022,
        calificacion: 7.8,
        fecha: "2022-03-04",
        poster: "img/posters/the_batman.jpg",
        sinopsis: "Bruce Wayne investiga crímenes del Acertijo en Gotham.",
        director: "Matt Reeves",
        duracion: "176 min"
    },
    {
        id: 4,
        titulo: "Spider-Man: No Way Home",
        genero: "accion",
        anio: 2021,
        calificacion: 8.3,
        fecha: "2021-12-17",
        poster: "img/posters/spiderman_nwh.jpg",
        sinopsis: "Peter Parker abre el multiverso al pedir al Doctor Strange un hechizo.",
        director: "Jon Watts",
        duracion: "148 min"
    },
    {
        id: 5,
        titulo: "Top Gun: Maverick",
        genero: "accion",
        anio: 2022,
        calificacion: 8.2,
        fecha: "2022-05-27",
        poster: "img/posters/topgun_maverick.jpg",
        sinopsis: "Maverick entrena a una nueva generación de pilotos de combate.",
        director: "Joseph Kosinski",
        duracion: "130 min"
    },
    {
        id: 6,
        titulo: "Avengers: Endgame",
        genero: "accion",
        anio: 2019,
        calificacion: 8.4,
        fecha: "2019-04-26",
        poster: "img/posters/avengers_endgame.jpg",
        sinopsis: "Los Vengadores intentan revertir las acciones de Thanos.",
        director: "Anthony y Joe Russo",
        duracion: "181 min"
    },
    {
        id: 7,
        titulo: "Interstellar",
        genero: "ciencia-ficcion",
        anio: 2014,
        calificacion: 8.7,
        fecha: "2014-11-07",
        poster: "img/posters/interstellar.jpg",
        sinopsis: "Exploradores viajan por un agujero de gusano para salvar a la humanidad.",
        director: "Christopher Nolan",
        duracion: "169 min"
    },
    {
        id: 8,
        titulo: "Inception",
        genero: "suspenso",
        anio: 2010,
        calificacion: 8.8,
        fecha: "2010-07-16",
        poster: "img/posters/inception.jpg",
        sinopsis: "Un ladrón de sueños recibe la tarea de plantar una idea en la mente de alguien.",
        director: "Christopher Nolan",
        duracion: "148 min"
    }
];

/* ================================================================
   REFERENCIAS AL DOM
   ================================================================ */
const inputBusqueda    = document.getElementById('busquedaPrincipal');
const btnBuscar        = document.getElementById('btnBuscar');
const selectGenero     = document.getElementById('filtroGenero');
const selectAnio       = document.getElementById('filtroAnio');
const selectCalif      = document.getElementById('filtroCalif');
const selectOrden      = document.getElementById('filtroOrden');
const btnLimpiar       = document.getElementById('btnLimpiar');
const btnLimpiar2      = document.getElementById('btnLimpiar2');
const contador         = document.getElementById('contadorResultados');
const listado          = document.getElementById('listadoPeliculas');
const sinResultados    = document.getElementById('sinResultados');
const listaFavoritas   = document.getElementById('listaFavoritas');

/* ================================================================
   FAVORITAS (localStorage)
   ================================================================ */
function obtenerFavoritas() {
    const data = localStorage.getItem('cineFavoritas');
    return data ? JSON.parse(data) : [];
}

function guardarFavoritas(ids) {
    localStorage.setItem('cineFavoritas', JSON.stringify(ids));
}

function agregarFavorito(id) {
    let favoritas = obtenerFavoritas();
    const pelicula = peliculas.find(p => p.id === id);
    if (!pelicula) return;

    if (favoritas.includes(id)) {
        favoritas = favoritas.filter(f => f !== id);
        mostrarToast(`"${pelicula.titulo}" eliminada de favoritas`, 'warning');
    } else {
        favoritas.push(id);
        mostrarToast(`"${pelicula.titulo}" agregada a favoritas ❤️`);
    }

    guardarFavoritas(favoritas);
    renderizarFavoritas();
    actualizarBotonesCorazon();
}

function renderizarFavoritas() {
    const favoritas = obtenerFavoritas();

    if (favoritas.length === 0) {
        listaFavoritas.innerHTML = `
            <div class="alert alert-secondary d-flex align-items-center gap-2" role="alert">
                <i class="bi bi-info-circle-fill fs-5 text-warning"></i>
                <span>Aún no has agregado películas a tus favoritas. Haz clic en
                <i class="bi bi-heart"></i> en cualquier película para comenzar.</span>
            </div>`;
        return;
    }

    const peliculasFav = peliculas.filter(p => favoritas.includes(p.id));
    let html = '<div class="row g-3">';

    peliculasFav.forEach(p => {
        html += `
            <div class="col-12 col-sm-6 col-md-4">
                <div class="favorita-mini">
                    <img src="${p.poster}" alt="${p.titulo}" />
                    <div class="flex-grow-1">
                        <h6 class="mb-0 fw-bold small">${p.titulo}</h6>
                        <small class="text-muted">${p.anio} &bull; ${p.director}</small>
                        <div class="mt-1">
                            <span class="badge bg-warning text-dark">
                                <i class="bi bi-star-fill me-1"></i>${p.calificacion}
                            </span>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-1">
                        <a href="detalle.html?id=${p.id}" class="btn btn-warning btn-sm">
                            <i class="bi bi-eye-fill"></i>
                        </a>
                        <button class="btn btn-outline-danger btn-sm" onclick="agregarFavorito(${p.id})" title="Quitar de favoritas">
                            <i class="bi bi-heart-fill"></i>
                        </button>
                    </div>
                </div>
            </div>`;
    });

    html += '</div>';
    listaFavoritas.innerHTML = html;
}

function actualizarBotonesCorazon() {
    const favoritas = obtenerFavoritas();
    document.querySelectorAll('[onclick^="agregarFavorito"]').forEach(btn => {
        const match = btn.getAttribute('onclick').match(/\d+/);
        if (match) {
            const id = parseInt(match[0]);
            const icon = btn.querySelector('i');
            if (icon) {
                if (favoritas.includes(id)) {
                    icon.className = 'bi bi-heart-fill';
                    btn.classList.add('btn-warning');
                    btn.classList.remove('btn-outline-warning');
                } else {
                    icon.className = 'bi bi-heart';
                    btn.classList.remove('btn-warning');
                    btn.classList.add('btn-outline-warning');
                }
            }
        }
    });
}

/* ================================================================
   FILTROS Y BÚSQUEDA
   ================================================================ */
function aplicarFiltros() {
    const textoBusqueda = (inputBusqueda ? inputBusqueda.value.toLowerCase().trim() : '');
    const generoFiltro  = selectGenero ? selectGenero.value : '';
    const anioFiltro    = selectAnio   ? selectAnio.value   : '';
    const califFiltro   = selectCalif  ? parseFloat(selectCalif.value) || 0 : 0;
    const ordenFiltro   = selectOrden  ? selectOrden.value  : 'fecha-desc';

    const items = document.querySelectorAll('.pelicula-item');
    let visibles = 0;

    items.forEach(item => {
        const titulo  = item.dataset.titulo  || '';
        const genero  = item.dataset.genero  || '';
        const anio    = item.dataset.anio    || '';
        const calif   = parseFloat(item.dataset.calif) || 0;

        const coincideBusqueda = !textoBusqueda || titulo.includes(textoBusqueda);
        const coincideGenero   = !generoFiltro  || genero === generoFiltro;
        const coincideAnio     = !anioFiltro    || anio === anioFiltro;
        const coincideCalif    = !califFiltro   || calif >= califFiltro;

        if (coincideBusqueda && coincideGenero && coincideAnio && coincideCalif) {
            item.classList.remove('oculta');
            visibles++;
        } else {
            item.classList.add('oculta');
        }
    });

    // Actualizar contador
    if (contador) {
        contador.textContent = `${visibles} película${visibles !== 1 ? 's' : ''}`;
    }

    // Mostrar/ocultar mensaje sin resultados
    if (sinResultados) {
        if (visibles === 0) {
            sinResultados.classList.remove('d-none');
            if (listado) listado.classList.add('d-none');
        } else {
            sinResultados.classList.add('d-none');
            if (listado) listado.classList.remove('d-none');
        }
    }

    // Ordenar
    ordenarPeliculas(ordenFiltro);
}

function ordenarPeliculas(criterio) {
    if (!listado) return;
    const items = Array.from(listado.querySelectorAll('.pelicula-item:not(.oculta)'));

    items.sort((a, b) => {
        switch (criterio) {
            case 'fecha-desc':
                return new Date(b.dataset.fecha) - new Date(a.dataset.fecha);
            case 'fecha-asc':
                return new Date(a.dataset.fecha) - new Date(b.dataset.fecha);
            case 'calif-desc':
                return parseFloat(b.dataset.calif) - parseFloat(a.dataset.calif);
            case 'titulo-asc':
                return a.dataset.titulo.localeCompare(b.dataset.titulo);
            default:
                return 0;
        }
    });

    items.forEach(item => listado.appendChild(item));
}

function limpiarFiltros() {
    if (inputBusqueda) inputBusqueda.value = '';
    if (selectGenero)  selectGenero.value  = '';
    if (selectAnio)    selectAnio.value    = '';
    if (selectCalif)   selectCalif.value   = '';
    if (selectOrden)   selectOrden.value   = 'fecha-desc';
    aplicarFiltros();
}

/* ================================================================
   TOAST DE NOTIFICACIÓN
   ================================================================ */
function mostrarToast(mensaje, tipo = 'success') {
    const toastEl = document.getElementById('toastFavorito');
    const toastMsg = document.getElementById('toastMensaje');

    if (!toastEl || !toastMsg) return;

    toastMsg.textContent = mensaje;

    // Cambiar color según tipo
    toastEl.className = 'toast align-items-center border-0';
    if (tipo === 'warning') {
        toastEl.classList.add('text-bg-secondary');
    } else {
        toastEl.classList.add('text-bg-warning');
    }

    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();
}

/* ================================================================
   BOTÓN SCROLL TOP
   ================================================================ */
function iniciarScrollTop() {
    const btn = document.createElement('button');
    btn.id = 'btnScrollTop';
    btn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Volver arriba');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ================================================================
   BÚSQUEDA DESDE NAVBAR
   ================================================================ */
function iniciarBusquedaNav() {
    const formNav = document.getElementById('formBusquedaNav');
    const inputNav = document.getElementById('busquedaNav');

    if (formNav && inputNav) {
        formNav.addEventListener('submit', (e) => {
            e.preventDefault();
            if (inputBusqueda) {
                inputBusqueda.value = inputNav.value;
                aplicarFiltros();
                document.getElementById('peliculas').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

/* ================================================================
   INICIALIZACIÓN
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

    // Eventos de filtros
    if (btnBuscar)  btnBuscar.addEventListener('click', aplicarFiltros);
    if (inputBusqueda) {
        inputBusqueda.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') aplicarFiltros();
            // Búsqueda en tiempo real con debounce
            clearTimeout(window._busquedaTimer);
            window._busquedaTimer = setTimeout(aplicarFiltros, 350);
        });
    }
    if (selectGenero) selectGenero.addEventListener('change', aplicarFiltros);
    if (selectAnio)   selectAnio.addEventListener('change', aplicarFiltros);
    if (selectCalif)  selectCalif.addEventListener('change', aplicarFiltros);
    if (selectOrden)  selectOrden.addEventListener('change', aplicarFiltros);
    if (btnLimpiar)   btnLimpiar.addEventListener('click', limpiarFiltros);
    if (btnLimpiar2)  btnLimpiar2.addEventListener('click', limpiarFiltros);

    // Renderizar favoritas al cargar
    renderizarFavoritas();
    actualizarBotonesCorazon();

    // Scroll top
    iniciarScrollTop();

    // Búsqueda desde navbar
    iniciarBusquedaNav();

    // Aplicar orden inicial
    aplicarFiltros();

    console.log('CineReseñas - main.js cargado correctamente ✓');
});
