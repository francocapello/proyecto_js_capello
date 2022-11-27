//array de productos (libros)
//imagenes ponerlas despues

const productos = [{
    id: 1,
    nombre: 'harry potter',
    cantidad: 500,
    precio: 2000,
    imagen:"" 
},
{
    id: 2,
    nombre: 'el señor de los anillos',
    cantidad: 400,
    precio: 1600,
    imagen: ""
},
{
    id: 3,
    nombre: 'bajo la misma estrella',
    cantidad: 250,
    precio: 1800,
    imagen: ""
},
{
    id: 4,
    nombre: 'el hombre de la tiza',
    cantidad: 100,
    precio: 2100,
    imagen: ""
},
{
    id: 5,
    nombre: 'el alquimista',
    cantidad: 300,
    precio: 1500,
    imagen: ""
},
{
    id: 6,
    nombre: 'lo que el viento se llevo',
    cantidad: 90,
    precio: 1400,
    imagen: ""
}

]; 

// let productosString = 'Lista: \n';

// for (let i = 0; i < productos.length; i++) {
//     productosString += 'id: ' + productos[i].id + ' - ' + productos[i].nombre + ': ' + productos[i].cantidad + ' unidades.\n';
// }

const contenedorLibros = document.getElementById("libros");
let galeria =``;

for (const producto of productos) {
    galeria += `
    <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: $${producto.precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    </div>
    `
}

contenedorLibros.innerHTML = galeria;