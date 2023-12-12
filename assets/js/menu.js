// Seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

/* 
  Cada vez que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () =>{
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* console.log(sumarDosNumeros(2,2))

function sumarDosNumeros(numero1, numero2){
  return numero1 + numero2
}

let sumarDosNumerosFuncionFlecha = (numero1, numero2) =>{
  return numero1 + numero2
}

let imprimirNombre = nombre => {
  console.log("MI NOMBRE ES:", nombre)
  console.log(`MI NOMBRE ES: ${nombre}`)
  console.log("MI NOMBRE ES: " + nombre)
}

function closeOrShow(){
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
}

const closeOrShowArrow = () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
}*/

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});