
let libro1 = "el señor de los anillos";
let libro2 = "harry potter";
// asi sucesivamente con otro libros 


function info(){

    let libro = prompt("ingrese nombre de un libro")

    if (libro == libro1){

        for(let i = 1; i <= 23; i++){
            console.log("el señor de los anillos tiene "+ i + " cantidad de libros");
        }
    }else{

        for(let i = 1; i <= 7; i++){
            console.log("harry potter tiene "+ i + " cantidad de libros");
        }
    }

    
}

info();


















    




