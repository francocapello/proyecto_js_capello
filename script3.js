//array de productos (libros)
//imagenes ponerlas despues

const productos = [{
    id: 1,
    nombre: 'Harry potter',
    cantidad: 500,
    precio: 2000,
    imagen:""
},
{
    id: 2,
    nombre: 'El señor de los anillos',
    cantidad: 400,
    precio: 1600,
    imagen: ""
},
{
    id: 3,
    nombre: 'Bajo la misma estrella',
    cantidad: 250,
    precio: 1800,
    imagen: ""
},
{
    id: 4,
    nombre: 'El hombre de la tiza',
    cantidad: 100,
    precio: 2100,
    imagen: ""
},
{
    id: 5,
    nombre: 'El alquimista',
    cantidad: 300,
    precio: 1500,
    imagen: ""
},
{
    id: 6,
    nombre: 'Lo que el viento se llevo',
    cantidad: 90,
    precio: 1400,
    imagen: ""
}

]; 

let compra = [];

let seleccion = prompt("Buenas, desea comprar algun producto? si o no")

while(seleccion !== "si" && seleccion !== "no"){
    alert("porfavor ingrese si o no")
    seleccion = prompt("Buenas, desea comprar algun producto? si o no")
}

const contenedorProductos = document.getElementById("contenedor");

productos.map((producto) => {
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="card" style="width: 20rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    </div>`

    contenedorProductos.appendChild(div)
})




const filtro = productos.filter((el) => el.precio <= 1600);

console.log(filtro);


