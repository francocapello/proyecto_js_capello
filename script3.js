
const productos = [{
    id: 1,
    nombre: 'Harry potter y la Orden del fenix',
    cantidad: 500,
    precio: 2000,
    imagen:"./img/harry.webp"
},
{
    id: 2,
    nombre: 'El señor de los anillos',
    cantidad: 400,
    precio: 1600,
    imagen: "./img/anillos.jpg"
},
{
    id: 3,
    nombre: 'Bajo la misma estrella',
    cantidad: 250,
    precio: 1800,
    imagen: "./img/estrella.jpg"
},
{
    id: 4,
    nombre: 'El hombre de la tiza',
    cantidad: 100,
    precio: 2100,
    imagen: "./img/tiza.jpg"
},
{
    id: 5,
    nombre: 'El alquimista',
    cantidad: 300,
    precio: 1500,
    imagen: "./img/alquimista.jpg"
},
{
    id: 6,
    nombre: 'Lo que el viento se llevo',
    cantidad: 90,
    precio: 1400,
    imagen: "./img/viento.jpg"
},
{
    id: 7,
    nombre: 'Sherlock Holmes',
    cantidad: 50,
    precio: 2300,
    imagen: "./img/holmes.jpg"
},
{
    id: 8,
    nombre: 'Orgullo y prejuicio',
    cantidad: 80,
    precio: 1200,
    imagen: "./img/orgullo.jpeg"
},
{
    id: 9,
    nombre: '1984 George Orwell',
    cantidad: 160,
    precio: 3000,
    imagen: "./img/1984.jpg"
},
{
    id: 10,
    nombre: 'Cuentos macabros',
    cantidad: 200,
    precio: 2800,
    imagen: "./img/cuentos.jpg"
}

]; 


// let seleccion = prompt("Buenas, desea comprar algun producto? si o no")

// while(seleccion !== "si" && seleccion !== "no"){
//     alert("porfavor ingrese si o no")
//     seleccion = prompt("Buenas, desea comprar algun producto? si o no")
// }

let carrito = [];

class Carrito {
    constructor(id, nombre, cantidad, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.imagen = imagen;
        this.total = precio * cantidad;
    }
}

const contenedorProductos = document.getElementById("contenedor");
const inputSearch = document.getElementById("input-search");
const carritoContenedor = document.getElementById("carrito-contenedor");

const agregarCarrito = (id) =>{
    if (!id){
        return;
    }
    const producto = productos.find(el => el.id === id);

    if (producto){
        const productoCarrito = new Carrito(producto.id, producto.nombre, 1, producto.precio, producto.imagen);

        if(carrito.some(el => el.id === id)){
            const target = carrito.find(el => el.id === id);
            carrito = carrito.filter(el => el.id !== id);

            const nuevoProducto = new Carrito(target.id, target.nombre, target.cantidad + 1, target.precio, target.imagen);
            carrito.push(nuevoProducto);
        }else{
            carrito.push(productoCarrito)
        }
    }
    listaCarrito(carrito);
}

const listaCarrito = (productoCarrito) =>{
    let acumulador = ""; 

    productoCarrito.forEach((producto) => {
        acumulador += `
        <tr>
            <th scope="row">${producto.id}</th>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio}</td>
            <td>$${producto.total}</td>
        </tr>
        `
    })

    carritoContenedor.innerHTML = acumulador;
}

const TodosLosProductos = (productos, contenedor) => {
    let acumulador = "";

    productos.forEach(element => {
        acumulador += `
        <div class="card" style="width: 20rem;">
            <img src="${element.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">${element.precio}</p>
                <a href="#" onclick = "agregarCarrito(${element.id})" class="btn btn-primary">Agregar</a>
            </div>
        </div>
        `
    });
    contenedor.innerHTML = acumulador;
}

TodosLosProductos(productos, contenedorProductos);



const handleSearch = (e) => {
    console.log(e.target.value);
    
    const filtrados = productos.filter(producto => producto.nombre.toLowerCase().includes(e.target.value.toLowerCase()))

    TodosLosProductos(filtrados, contenedorProductos);

}

inputSearch.addEventListener("input", handleSearch);





