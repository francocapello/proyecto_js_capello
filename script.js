const user_comprador = "cliente";
const user_pass = "1234";

let usuario = prompt("ingrese su usuario");
let password = prompt("ingrese su contraseña");

if (user_comprador === usuario && user_pass === password){

    console.log("el usuario ingresado es cliente");

    alert("ya puedes ver la coleccion");

}else{

    let mensaje = "ingrese correctamente sus datos";
    
    if(user_comprador != usuario){

        mensaje += "\nUsuario";
    }

    if (user_pass != password){

        mensaje += "\nContraseña";
    }

    alert(mensaje);
}




