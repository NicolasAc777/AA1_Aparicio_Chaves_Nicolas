/**
 * CineReseñas - detalle.js
 * Lógica de la página de detalle: comentarios, galería, favoritas y reseñas
 * Autor: AA1_Aparicio_Chaves_Nicolas
 */

'use strict';

/* ================================================================
   BASE DE DATOS LOCAL DE PELÍCULAS
   ================================================================ */
const peliculasDB = {
    1: {
        id: 1,
        titulo: "Dune: Parte Dos",
        genero: "Ciencia Ficción",
        anio: 2024,
        calificacion: 8.5,
        fechaEstreno: "01 de Marzo, 2024",
        director: "Denis Villeneuve",
        duracion: "166 min",
        pais: "EE.UU.",
        idioma: "Inglés",
        poster: "img/posters/dune2.jpg",
        heroImg: "img/posters/dune2.jpg",
        sinopsis: `Paul Atreides se une a los Fremen y emprende un viaje espiritual y marcial
            para convertirse en Muad'Dib, mientras intenta evitar el terrible futuro que
            solo él puede prever. Habiendo traicionado a su pueblo natal, Paul enfrenta
            la elección de amar a Chani o cumplir el destino que lo convierte en el
            mesías de los Fremen.`,
        sinopsis2: `La película continúa la épica saga de ciencia ficción basada en la novela
            de Frank Herbert, llevando al espectador a través de los desiertos de Arrakis
            mientras Paul Atreides lucha por la supervivencia y el poder en un universo
            intergaláctico lleno de intrigas políticas y conflictos religiosos.`,
        actores: [
            { nombre: "Timothée Chalamet", personaje: "Paul Atreides" },
            { nombre: "Zendaya",           personaje: "Chani" },
            { nombre: "Rebecca Ferguson",  personaje: "Lady Jessica" },
            { nombre: "Austin Butler",     personaje: "Feyd-Rautha" },
            { nombre: "Florence Pugh",     personaje: "Princesa Irulan" },
            { nombre: "Josh Brolin",       personaje: "Gurney Halleck" },
            { nombre: "Javier Bardem",     personaje: "Stilgar" },
            { nombre: "Christopher Walken",personaje: "Emperador Shaddam IV" }
        ]
    },
    2: {
        id: 2,
        titulo: "Oppenheimer",
        genero: "Drama",
        anio: 2023,
        calificacion: 8.9,
        fechaEstreno: "21 de Julio, 2023",
        director: "Christopher Nolan",
        duracion: "180 min",
        pais: "EE.UU. / Reino Unido",
        idioma: "Inglés",
        poster: "img/posters/oppenheimer.jpg",
        heroImg: "img/posters/oppenheimer.jpg",
        sinopsis: `La historia del físico J. Robert Oppenheimer y su papel en el desarrollo
            de la primera bomba atómica durante la Segunda Guerra Mundial. El Proyecto
            Manhattan reunió a los mejores científicos del mundo en Los Álamos, Nuevo México,
            para crear el arma más destructiva jamás concebida.`,
        sinopsis2: `Christopher Nolan dirige esta épica biográfica que explora no solo los
            logros científicos de Oppenheimer, sino también las consecuencias morales y
            políticas de su trabajo, incluyendo su posterior persecución durante la era
            del macartismo en los Estados Unidos.`,
        actores: [
            { nombre: "Cillian Murphy",    personaje: "J. Robert Oppenheimer" },
            { nombre: "Emily Blunt",       personaje: "Katherine Oppenheimer" },
            { nombre: "Matt Damon",        personaje: "General Leslie Groves" },
            { nombre: "Robert Downey Jr.", personaje: "Lewis Strauss" },
            { nombre: "Florence Pugh",     personaje: "Jean Tatlock" },
            { nombre: "Josh Hartnett",     personaje: "Ernest Lawrence" },
            { nombre: "Casey Affleck",     personaje: "Boris Pash" },
            { nombre: "Rami Malek",        personaje: "David Hill" }
        ]
    },
    3: {
        id: 3,
        titulo: "The Batman",
        genero: "Acción",
        anio: 2022,
        calificacion: 7.8,
        fechaEstreno: "04 de Marzo, 2022",
        director: "Matt Reeves",
        duracion: "176 min",
        pais: "EE.UU.",
        idioma: "Inglés",
        poster: "img/posters/the_batman.jpg",
        heroImg: "img/posters/the_batman.jpg",
        sinopsis: `En su segundo año como Batman, Bruce Wayne investiga una serie de crímenes
            perpetrados por un asesino en serie conocido como El Acertijo. La investigación
            lo lleva a las profundidades de la corrupción en Gotham City.`,
        sinopsis2: `Matt Reeves presenta una visión oscura y noir del Caballero de la Noche,
            enfocándose en sus habilidades detectivescas más que en sus capacidades de combate.
            Robert Pattinson ofrece una interpretación única y atormentada del icónico personaje.`,
        actores: [
            { nombre: "Robert Pattinson", personaje: "Bruce Wayne / Batman" },
            { nombre: "Zoë Kravitz",      personaje: "Selina Kyle / Catwoman" },
            { nombre: "Paul Dano",        personaje: "Edward Nashton / El Acertijo" },
            { nombre: "Jeffrey Wright",   personaje: "James Gordon" },
            { nombre: "John Turturro",    personaje: "Carmine Falcone" },
            { nombre: "Peter Sarsgaard",  personaje: "Gil Colson" },
            { nombre: "Andy Serkis",      personaje: "Alfred Pennyworth" },
            { nombre: "Colin Farrell",    personaje: "Oswald Cobblepot / El Pingüino" }
        ]
    },
    4: {
        id: 4,
        titulo: "Spider-Man: No Way Home",
        genero: "Acción",
        anio: 2021,
        calificacion: 8.3,
        fechaEstreno: "17 de Diciembre, 2021",
        director: "Jon Watts",
        duracion: "148 min",
        pais: "EE.UU.",
        idioma: "Inglés",
        poster: "img/posters/spiderman_nwh.jpg",
        heroImg: "img/posters/spiderman_nwh.jpg",
        sinopsis: `Peter Parker pide al Doctor Strange que haga olvidar al mundo que él es
            Spider-Man, pero el hechizo sale mal y abre el multiverso, trayendo villanos
            de universos paralelos al suyo.`,
        sinopsis2: `La película es una celebración del legado de Spider-Man en el cine,
            reuniendo personajes de las trilogías anteriores en una aventura que emociona
            tanto a los fans de larga data como a los nuevos espectadores.`,
        actores: [
            { nombre: "Tom Holland",       personaje: "Peter Parker / Spider-Man" },
            { nombre: "Zendaya",           personaje: "MJ" },
            { nombre: "Benedict Cumberbatch", personaje: "Doctor Strange" },
            { nombre: "Jacob Batalon",     personaje: "Ned Leeds" },
            { nombre: "Jamie Foxx",        personaje: "Electro" },
            { nombre: "Alfred Molina",     personaje: "Doctor Octopus" },
            { nombre: "Willem Dafoe",      personaje: "Norman Osborn / Duende Verde" },
            { nombre: "Marisa Tomei",      personaje: "May Parker" }
        ]
    },
    5: {
        id: 5,
        titulo: "Top Gun: Maverick",
        genero: "Acción",
        anio: 2022,
        calificacion: 8.2,
        fechaEstreno: "27 de Mayo, 2022",
        director: "Joseph Kosinski",
        duracion: "130 min",
        pais: "EE.UU.",
        idioma: "Inglés",
        poster: "img/posters/topgun_maverick.jpg",
        heroImg: "img/posters/topgun_maverick.jpg",
        sinopsis: `Después de más de 30 años de servicio, Pete "Maverick" Mitchell sigue siendo
            piloto de pruebas y entrena a una nueva generación de graduados de Top Gun para
            una misión que exigirá el máximo sacrificio.`,
        sinopsis2: `La secuela supera a la original en espectacularidad y emoción. Tom Cruise
            insistió en que los actores aprendieran a volar jets reales para las secuencias
            de vuelo, lo que da a la película una autenticidad sin precedentes.`,
        actores: [
            { nombre: "Tom Cruise",        personaje: "Pete 'Maverick' Mitchell" },
            { nombre: "Miles Teller",      personaje: "Bradley 'Rooster' Bradshaw" },
            { nombre: "Jennifer Connelly", personaje: "Penny Benjamin" },
            { nombre: "Jon Hamm",          personaje: "Cyclone" },
            { nombre: "Glen Powell",       personaje: "Hangman" },
            { nombre: "Lewis Pullman",     personaje: "Bob" },
            { nombre: "Ed Harris",         personaje: "Almirante" },
            { nombre: "Val Kilmer",        personaje: "Iceman" }
        ]
    },
    6: {
        id: 6,
        titulo: "Avengers: Endgame",
        genero: "Acción",
        anio: 2019,
        calificacion: 8.4,
        fechaEstreno: "26 de Abril, 2019",
        director: "Anthony y Joe Russo",
        duracion: "181 min",
        pais: "EE.UU.",
        idioma: "Inglés",
        poster: "img/posters/avengers_endgame.jpg",
        heroImg: "img/posters/avengers_endgame.jpg",
        sinopsis: `Los Vengadores supervivientes se unen para revertir las acciones de Thanos
            y restaurar el orden en el universo. Una misión que requiere viajes en el tiempo
            y sacrificios definitivos.`,
        sinopsis2: `El épico cierre del Universo Cinematográfico de Marvel reúne a todos los
            héroes en una batalla final que pone en juego el destino de toda la existencia.
            Una película que marcó un hito en la historia del cine de superhéroes.`,
        actores: [
            { nombre: "Robert Downey Jr.", personaje: "Tony Stark / Iron Man" },
            { nombre: "Chris Evans",       personaje: "Steve Rogers / Capitán América" },
            { nombre: "Mark Ruffalo",      personaje: "Bruce Banner / Hulk" },
            { nombre: "Chris Hemsworth",   personaje: "Thor" },
            { nombre: "Scarlett Johansson",personaje: "Natasha Romanoff / Viuda Negra" },
            { nombre: "Jeremy Renner",     personaje: "Clint Barton / Ojo de Halcón" },
            { nombre: "Brie Larson",       personaje: "Carol Danvers / Capitana Marvel" },
            { nombre: "Josh Brolin",       personaje: "Thanos" }
        ]
    },
    7: {
        id: 7,
        titulo: "Interstellar",
        genero: "Ciencia Ficción",
        anio: 2014,
        calificacion: 8.7,
        fechaEstreno: "07 de Noviembre, 2014",
        director: "Christopher Nolan",
        duracion: "169 min",
        pais: "EE.UU. / Reino Unido",
        idioma: "Inglés",
        poster: "img/posters/interstellar.jpg",
        heroImg: "img/posters/interstellar.jpg",
        sinopsis: `Un grupo de exploradores viaja a través de un agujero de gusano en el espacio
            para garantizar la supervivencia de la humanidad. Cooper, un ex piloto de la NASA,
            lidera la misión dejando atrás a su familia.`,
        sinopsis2: `Interstellar es una exploración profunda de los conceptos de relatividad,
            amor y sacrificio. Christopher Nolan trabajó con el físico teórico Kip Thorne para
            asegurar la precisión científica de los conceptos presentados en la película.`,
        actores: [
            { nombre: "Matthew McConaughey", personaje: "Cooper" },
            { nombre: "Anne Hathaway",       personaje: "Dra. Amelia Brand" },
            { nombre: "Jessica Chastain",    personaje: "Murph (adulta)" },
            { nombre: "Michael Caine",       personaje: "Prof. John Brand" },
            { nombre: "Matt Damon",          personaje: "Dr. Mann" },
            { nombre: "Mackenzie Foy",       personaje: "Murph (joven)" },
            { nombre: "Casey Affleck",       personaje: "Tom (adulto)" },
            { nombre: "Topher Grace",        personaje: "Getty" }
        ]
    },
    8: {
        id: 8,
        titulo: "Inception",
        genero: "Suspenso",
        anio: 2010,
        calificacion: 8.8,
        fechaEstreno: "16 de Julio, 2010",
        director: "Christopher Nolan",
        duracion: "148 min",
        pais: "EE.UU. / Reino Unido",
        idioma: "Inglés",
        poster: "img/posters/inception.jpg",
        heroImg: "img/posters/inception.jpg",
        sinopsis: `Un ladrón que roba secretos corporativos a través del uso de tecnología
            de sueños compartidos recibe la tarea inversa de plantar una idea en la mente
            de un CEO. Cobb debe realizar el inception perfecto para poder volver a casa.`,
        sinopsis2: `Inception es un thriller de ciencia ficción que desafía los límites de la
            realidad y la percepción. Christopher Nolan construye un universo de sueños dentro
            de sueños que mantiene al espectador en constante tensión y asombro.`,
        actores: [
            { nombre: "Leonardo DiCaprio", personaje: "Dom Cobb" },
            { nombre: "Joseph Gordon-Levitt", personaje: "Arthur" },
            { nombre: "Elliot Page",       personaje: "Ariadne" },
            { nombre: "Tom Hardy",         personaje: "Eames" },
            { nombre: "Ken Watanabe",      personaje: "Saito" },
            { nombre: "Dileep Rao",        personaje: "Yusuf" },
            { nombre: "Cillian Murphy",    personaje: "Robert Fischer" },
            { nombre: "Marion Cotillard",  personaje: "Mal" }
        ]
    }
};

/* ================================================================
   OBTENER ID DE LA URL
   ================================================================ */
function obtenerIdUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    return isNaN(id) ? 1 : id;
}

/* ================================================================
   CARGAR DATOS DE LA PELÍCULA
   ================================================================ */
function cargarPelicula(id) {
    const p = peliculasDB[id];
    if (!p) {
        document.title = 'Película no encontrada - CineReseñas';
        return;
    }

    // Título de la página
    document.title = `${p.titulo} - CineReseñas`;

    // Breadcrumb
    const breadcrumb = document.getElementById('breadcrumbPelicula');
    if (breadcrumb) breadcrumb.textContent = p.titulo;

    // Hero background
    const hero = document.getElementById('detalleHero');
    if (hero) hero.style.backgroundImage = `url('${p.heroImg}')`;

    // Póster
    const poster = document.getElementById('posterDetalle');
    if (poster) {
        poster.src = p.poster;
        poster.alt = `Póster de ${p.titulo}`;
    }

    // Título principal
    const titulo = document.getElementById('tituloPelicula');
    if (titulo) titulo.textContent = p.titulo;

    // Badges
    const badgeGenero = document.getElementById('badgeGenero');
    if (badgeGenero) badgeGenero.textContent = p.genero;

    const badgeAnio = document.getElementById('badgeAnio');
    if (badgeAnio) badgeAnio.textContent = p.anio;

    const badgeDuracion = document.getElementById('badgeDuracion');
    if (badgeDuracion) badgeDuracion.innerHTML = `<i class="bi bi-clock me-1"></i>${p.duracion}`;

    // Calificación
    const calif = document.getElementById('calificacion');
    if (calif) calif.textContent = p.calificacion;

    const califResena = document.getElementById('calificacionResena');
    if (califResena) califResena.textContent = `${p.calificacion}/10`;

    // Estrellas
    renderizarEstrellas('starsDisplay', p.calificacion);
    renderizarEstrellas('starsResena', p.calificacion);

    // Fecha y director
    const fechaEl = document.getElementById('fechaEstreno');
    if (fechaEl) fechaEl.textContent = p.fechaEstreno;

    const directorEl = document.getElementById('directorInfo');
    if (directorEl) directorEl.textContent = p.director;

    // Sinopsis
    const sinopsis = document.getElementById('textSinopsis');
    if (sinopsis) sinopsis.textContent = p.sinopsis;

    const sinopsis2 = document.getElementById('textSinopsis2');
    if (sinopsis2) sinopsis2.textContent = p.sinopsis2;

    // Ficha técnica
    const fichaAnio = document.getElementById('fichaAnio');
    if (fichaAnio) fichaAnio.textContent = p.anio;

    const fichaDuracion = document.getElementById('fichaDuracion');
    if (fichaDuracion) fichaDuracion.textContent = p.duracion;

    const fichaGenero = document.getElementById('fichaGenero');
    if (fichaGenero) fichaGenero.textContent = p.genero;

    const fichaDirector = document.getElementById('fichaDirector');
    if (fichaDirector) fichaDirector.textContent = p.director;

    const fichaPais = document.getElementById('fichaPais');
    if (fichaPais) fichaPais.textContent = p.pais;

    const fichaIdioma = document.getElementById('fichaIdioma');
    if (fichaIdioma) fichaIdioma.textContent = p.idioma;

    // Actores
    renderizarActores(p.actores);

    // Botón favorito
    actualizarBotonFavorito(id);

    // Cargar comentarios guardados
    cargarComentarios(id);
}

/* ================================================================
   RENDERIZAR ESTRELLAS
   ================================================================ */
function renderizarEstrellas(containerId, calificacion) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const estrellas = Math.round(calificacion / 2); // Escala 0-10 a 0-5
    let html = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= estrellas) {
            html += '<i class="bi bi-star-fill star-filled"></i>';
        } else if (i - 0.5 <= estrellas) {
            html += '<i class="bi bi-star-half star-half"></i>';
        } else {
            html += '<i class="bi bi-star star-empty"></i>';
        }
    }

    container.innerHTML = html;
}

/* ================================================================
   RENDERIZAR ACTORES
   ================================================================ */
function renderizarActores(actores) {
    const container = document.getElementById('listaActores');
    if (!container || !actores) return;

    const colores = ['text-warning', 'text-primary', 'text-success', 'text-info',
                     'text-danger', 'text-secondary', 'text-warning', 'text-primary'];

    let html = '';
    actores.forEach((actor, i) => {
        html += `
            <div class="col-6 col-sm-4 col-md-3">
                <div class="card actor-card text-center h-100 border-0 shadow-sm">
                    <div class="actor-avatar mx-auto mt-3">
                        <i class="bi bi-person-circle display-4 ${colores[i % colores.length]}"></i>
                    </div>
                    <div class="card-body p-2">
                        <h6 class="card-title mb-0 small fw-bold">${actor.nombre}</h6>
                        <small class="text-muted">${actor.personaje}</small>
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = html;
}

/* ================================================================
   FAVORITAS
   ================================================================ */
function obtenerFavoritas() {
    const data = localStorage.getItem('cineFavoritas');
    return data ? JSON.parse(data) : [];
}

function guardarFavoritas(ids) {
    localStorage.setItem('cineFavoritas', JSON.stringify(ids));
}

function actualizarBotonFavorito(id) {
    const btn = document.getElementById('btnFavoritoDetalle');
    if (!btn) return;

    const favoritas = obtenerFavoritas();
    if (favoritas.includes(id)) {
        btn.innerHTML = '<i class="bi bi-heart-fill me-2"></i>En Favoritas';
        btn.classList.add('btn-danger');
        btn.classList.remove('btn-warning');
    } else {
        btn.innerHTML = '<i class="bi bi-heart me-2"></i>Agregar a Favoritas';
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-warning');
    }
}

function toggleFavorito(id) {
    let favoritas = obtenerFavoritas();
    const pelicula = peliculasDB[id];
    if (!pelicula) return;

    if (favoritas.includes(id)) {
        favoritas = favoritas.filter(f => f !== id);
        mostrarToast(`"${pelicula.titulo}" eliminada de favoritas`);
    } else {
        favoritas.push(id);
        mostrarToast(`"${pelicula.titulo}" agregada a favoritas ❤️`);
    }

    guardarFavoritas(favoritas);
    actualizarBotonFavorito(id);
}

/* ================================================================
   SISTEMA DE COMENTARIOS
   ================================================================ */
function obtenerComentarios(peliculaId) {
    const key = `cineComentarios_${peliculaId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function guardarComentarios(peliculaId, comentarios) {
    const key = `cineComentarios_${peliculaId}`;
    localStorage.setItem(key, JSON.stringify(comentarios));
}

function cargarComentarios(peliculaId) {
    const comentarios = obtenerComentarios(peliculaId);
    const container = document.getElementById('comentariosNuevos');
    if (!container) return;

    if (comentarios.length === 0) {
        container.innerHTML = '';
        return;
    }

    let html = '';
    comentarios.forEach(c => {
        html += crearHTMLComentario(c);
    });
    container.innerHTML = html;
}

function crearHTMLComentario(c) {
    const coloresAvatar = ['text-warning', 'text-primary', 'text-success', 'text-info', 'text-danger'];
    const colorIdx = Math.abs(c.nombre.charCodeAt(0)) % coloresAvatar.length;
    const color = coloresAvatar[colorIdx];

    return `
        <div class="card comentario-card mb-3 shadow-sm border-0 comentario-nuevo" id="comentario-${c.id}">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <div class="d-flex align-items-center gap-2">
                        <div class="avatar-comentario">
                            <i class="bi bi-person-circle fs-3 ${color}"></i>
                        </div>
                        <div>
                            <h6 class="mb-0 fw-bold">${escapeHtml(c.nombre)}</h6>
                            <small class="text-muted">
                                <i class="bi bi-calendar3 me-1"></i>${c.fecha}
                            </small>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-warning text-dark">
                            <i class="bi bi-star-fill me-1"></i>${c.calificacion}/10
                        </span>
                        <button class="btn btn-sm btn-outline-danger" onclick="eliminarComentario('${c.id}')" title="Eliminar comentario">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
                <p class="card-text mb-2">${escapeHtml(c.texto)}</p>
                <div class="d-flex gap-3">
                    <button class="btn btn-sm btn-outline-secondary like-btn" onclick="darLike(this)">
                        <i class="bi bi-hand-thumbs-up me-1"></i>
                        <span class="like-count">0</span> Me gusta
                    </button>
                    <button class="btn btn-sm btn-outline-secondary" onclick="responderComentario(this)">
                        <i class="bi bi-reply me-1"></i>Responder
                    </button>
                </div>
            </div>
        </div>`;
}

function agregarComentario(peliculaId, datos) {
    const comentarios = obtenerComentarios(peliculaId);
    const nuevoComentario = {
        id: Date.now().toString(),
        ...datos,
        fecha: new Date().toLocaleDateString('es-ES', {
            day: 'numeric', month: 'long', year: 'numeric'
        })
    };
    comentarios.push(nuevoComentario);
    guardarComentarios(peliculaId, comentarios);
    return nuevoComentario;
}

function eliminarComentario(comentarioId) {
    const peliculaId = obtenerIdUrl();
    let comentarios = obtenerComentarios(peliculaId);
    comentarios = comentarios.filter(c => c.id !== comentarioId);
    guardarComentarios(peliculaId, comentarios);

    const el = document.getElementById(`comentario-${comentarioId}`);
    if (el) {
        el.style.transition = 'all 0.3s ease';
        el.style.opacity = '0';
        el.style.transform = 'translateX(20px)';
        setTimeout(() => el.remove(), 300);
    }

    mostrarToast('Comentario eliminado');
}

/* ================================================================
   INTERACCIONES DE COMENTARIOS
   ================================================================ */
function darLike(btn) {
    const countEl = btn.querySelector('.like-count');
    if (!countEl) return;

    if (btn.classList.contains('liked')) {
        btn.classList.remove('liked');
        countEl.textContent = Math.max(0, parseInt(countEl.textContent) - 1);
    } else {
        btn.classList.add('liked');
        countEl.textContent = parseInt(countEl.textContent) + 1;
    }
}

function responderComentario(btn) {
    const card = btn.closest('.card');
    if (!card) return;

    // Evitar duplicar el formulario de respuesta
    if (card.querySelector('.form-respuesta')) return;

    const formHtml = `
        <div class="form-respuesta mt-3 comentario-respuesta p-3">
            <h6 class="small fw-bold mb-2">
                <i class="bi bi-reply me-1 text-warning"></i>Responder
            </h6>
            <div class="mb-2">
                <input type="text" class="form-control form-control-sm" placeholder="Tu nombre" id="respNombre_${Date.now()}" />
            </div>
            <div class="mb-2">
                <input type="text" class="form-control form-control-sm" placeholder="Tu respuesta..." id="respTexto_${Date.now()}" />
            </div>
            <div class="d-flex gap-2">
                <button class="btn btn-warning btn-sm" onclick="publicarRespuesta(this)">
                    <i class="bi bi-send me-1"></i>Publicar
                </button>
                <button class="btn btn-outline-secondary btn-sm" onclick="this.closest('.form-respuesta').remove()">
                    Cancelar
                </button>
            </div>
        </div>`;

    card.querySelector('.card-body').insertAdjacentHTML('beforeend', formHtml);
}

function publicarRespuesta(btn) {
    const form = btn.closest('.form-respuesta');
    const nombreInput = form.querySelector('input[type="text"]');
    const textoInput  = form.querySelectorAll('input[type="text"]')[1];

    const nombre = nombreInput ? nombreInput.value.trim() : '';
    const texto  = textoInput  ? textoInput.value.trim()  : '';

    if (!nombre || !texto) {
        mostrarToast('Por favor completa todos los campos', 'warning');
        return;
    }

    const respuestaHtml = `
        <div class="comentario-respuesta p-3 mt-2">
            <div class="d-flex align-items-center gap-2 mb-1">
                <i class="bi bi-person-circle text-info"></i>
                <strong class="small">${escapeHtml(nombre)}</strong>
                <small class="text-muted">Ahora</small>
            </div>
            <p class="mb-0 small">${escapeHtml(texto)}</p>
        </div>`;

    form.insertAdjacentHTML('afterend', respuestaHtml);
    form.remove();
    mostrarToast('Respuesta publicada');
}

/* ================================================================
   GALERÍA - MODAL
   ================================================================ */
function iniciarGaleria() {
    const items = document.querySelectorAll('.gallery-item');
    const modalImg = document.getElementById('modalGaleriaImg');
    const modalCaption = document.getElementById('modalGaleriaCaption');

    items.forEach(item => {
        item.addEventListener('click', () => {
            if (modalImg) modalImg.src = item.dataset.img || '';
            if (modalCaption) modalCaption.textContent = item.dataset.caption || '';
        });
    });
}

/* ================================================================
   COMPARTIR
   ================================================================ */
function iniciarCompartir(peliculaId) {
    const btn = document.getElementById('btnCompartir');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const pelicula = peliculasDB[peliculaId];
        if (!pelicula) return;

        if (navigator.share) {
            navigator.share({
                title: pelicula.titulo,
                text: `Mira la reseña de "${pelicula.titulo}" en CineReseñas`,
                url: window.location.href
            }).catch(() => {});
        } else {
            // Fallback: copiar URL
            navigator.clipboard.writeText(window.location.href).then(() => {
                mostrarToast('URL copiada al portapapeles');
            }).catch(() => {
                mostrarToast('No se pudo copiar la URL');
            });
        }
    });
}

/* ================================================================
   TOAST DE NOTIFICACIÓN
   ================================================================ */
function mostrarToast(mensaje, tipo = 'success') {
    const toastEl  = document.getElementById('toastNotif');
    const toastMsg = document.getElementById('toastNotifMsg');

    if (!toastEl || !toastMsg) return;

    toastMsg.textContent = mensaje;
    toastEl.className = 'toast align-items-center border-0';
    toastEl.classList.add(tipo === 'warning' ? 'text-bg-secondary' : 'text-bg-warning');

    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();
}

/* ================================================================
   ESCAPE HTML (seguridad)
   ================================================================ */
function escapeHtml(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
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
        btn.classList.toggle('visible', window.scrollY > 300);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ================================================================
   INICIALIZACIÓN
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const peliculaId = obtenerIdUrl();

    // Cargar datos de la película
    cargarPelicula(peliculaId);

    // Botón favorito
    const btnFav = document.getElementById('btnFavoritoDetalle');
    if (btnFav) {
        btnFav.addEventListener('click', () => toggleFavorito(peliculaId));
    }

    // Formulario de comentarios
    const formComentario = document.getElementById('formComentario');
    if (formComentario) {
        formComentario.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombreUsuario').value.trim();
            const texto  = document.getElementById('textoComentario').value.trim();
            const calif  = document.getElementById('calificacionComentario').value;

            if (!nombre || !texto) {
                formComentario.classList.add('was-validated');
                return;
            }

            const nuevoComentario = agregarComentario(peliculaId, {
                nombre,
                texto,
                calificacion: calif
            });

            // Insertar en el DOM
            const container = document.getElementById('comentariosNuevos');
            if (container) {
                const div = document.createElement('div');
                div.innerHTML = crearHTMLComentario(nuevoComentario);
                const newEl = div.firstElementChild;
                newEl.style.opacity = '0';
                newEl.style.transform = 'translateY(20px)';
                container.prepend(newEl);
                requestAnimationFrame(() => {
                    newEl.style.transition = 'all 0.4s ease';
                    newEl.style.opacity = '1';
                    newEl.style.transform = 'translateY(0)';
                });
            }

            // Limpiar formulario
            formComentario.reset();
            formComentario.classList.remove('was-validated');
            mostrarToast('¡Comentario publicado exitosamente!');

            // Scroll al comentario
            setTimeout(() => {
                document.getElementById('listaComentarios')
                    .scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 400);
        });
    }

    // Formulario de reseña
    const formResena = document.getElementById('formResena');
    if (formResena) {
        formResena.addEventListener('submit', (e) => {
            e.preventDefault();
            const titulo = document.getElementById('tituloResena').value.trim();
            const texto  = document.getElementById('textoResenaInput').value.trim();

            if (!titulo || !texto) {
                formResena.classList.add('was-validated');
                return;
            }

            mostrarToast('¡Reseña publicada exitosamente!');
            formResena.reset();
            formResena.classList.remove('was-validated');
        });
    }

    // Galería
    iniciarGaleria();

    // Compartir
    iniciarCompartir(peliculaId);

    // Scroll top
    iniciarScrollTop();

    console.log(`CineReseñas - detalle.js cargado para película ID: ${peliculaId} ✓`);
});
