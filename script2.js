//script para el formulario

let inputFormulario = document.getElementById("inputFormulario");

for(let i = 0; i < inputFormulario.length; i++){
    inputFormulario[i].addEventListener("keyup", function(){
        if(this.value.length >= 1){
            this.nextElementSibling.classList.add("fijar");
        }else{
            this.nextElementSibling.classList.remove("fijar");
        }
    });
}






















    




