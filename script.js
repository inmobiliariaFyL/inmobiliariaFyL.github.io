// Datos de propiedades (simulados)
const propiedades = [
    {
        id: 1,
        titulo: "Vendes o Rentas Casa. - Espacio disponible.",
        tipo: "casa",
        precio: "$1,200,000",
        imagen: [  // Array de imágenes
            "../imagenes/foto_no_exif.jpg",
            "../imagenes/foto_no_exif3.jpg",
            "../imagenes/casa3.jpg"
        ],
        imagen: "../imagenes/foto_no_exif.jpg",
        enlace: "propiedades/casa-venta-1.html",
    },

    {
        id: 2,
        titulo: "Vendes o Rentas Terreno. - Espacio disponible.",
        tipo: "terreno",
        precio: "$15,000/mes",    
        imagen: [  // Array de imágenes
            "../imagenes/foto_no_exif1.jpg",
            "../imagenes/departmento2.jpg",
            "../imagenes/casa3.jpg"
        ],
        imagen: "../imagenes/foto_no_exif1.jpg",
        enlace: "propiedades/terreno-venta-2.html"
    },

    {
        id: 3,
        titulo: "Vendes o Rentas Departamento. - Espacio disponible.",
        tipo: "departamento",
        precio: "$800,000",
        imagen: [  // Array de imágenes
            "../imagenes/foto_no_exif4.jpg",
            "../imagenes/departmento2.jpg",
            "../imagenes/casa3.jpg"
        ],
        imagen: "../imagenes/foto_no_exif4.jpg",
        enlace: "propiedades/depto-renta-3.html"
    },

    {
        id: 4,
        titulo: "Vendes o Rentas Bodega. - Espacio disponible.",
        tipo: "bodega",
        precio: "$800,000",
        imagen: [  // Array de imágenes
            "../imagenes/foto_no_exif5.jpg",
            "../imagenes/casa.jpg",
            "../imagenes/.jpg"
        ],
        imagen: "../imagenes/foto_no_exif5.jpg",
        enlace: "propiedades/bodega-renta-4.html"
    },

    {
        id: 5,
        titulo: "Vendes o Rentas Local. - Espacio disponible.",
        tipo: "local",
        precio: "$800,000",
        imagen: [  // Array de imágenes
            "../imagenes/foto_no_exif6.jpg",
            "../imagenes/departmento2.jpg",
            "../imagenes/casa3.jpg"
        ],
        imagen: "../imagenes/foto_no_exif6.jpg",
        enlace: "propiedades/local-venta-5.html"
    },

    {
        id: 6,
        titulo: "Vendes o Rentas Casa. - Espacio disponible",
        tipo: "casa",
        precio: "$800,000",
        imagen: [  // Array de imágenes
            "../imagenes/foto_no_exif3.jpg",
            "../imagenes/.jpg",
            "../imagenes/.jpg"
        ],
        imagen: "../imagenes/foto_no_exif3.jpg",
        enlace: "propiedades/casa-renta-6.html"
    }
];

// Inicializar Swiper (carrusel)
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Cargar propiedades en el listado
function cargarPropiedades(tipo = "todos") {
    const lista = document.getElementById("lista-propiedades");
    lista.innerHTML = "";

    const propiedadesFiltradas = tipo === "todos" 
        ? propiedades 
        : propiedades.filter(prop => prop.tipo === tipo);

    propiedadesFiltradas.forEach(prop => {
        lista.innerHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${prop.imagen}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${prop.titulo}</h5>
                        <p class="card-text">${prop.precio}</p>
                        <a href="${prop.enlace}" class="btn btn-primary">Ver detalles</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// Filtrar propiedades
document.getElementById("btn-filtrar").addEventListener("click", () => {
    const tipo = document.getElementById("filtro-tipo").value;
    cargarPropiedades(tipo);
});

// Cargar propiedades al inicio
document.addEventListener("DOMContentLoaded", () => {
    cargarPropiedades();
});

