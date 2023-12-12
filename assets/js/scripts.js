jQuery('document').ready(function($){

//menu
/*
var menuBtn=$('.menu-icon'),
menu=$('.navigation ul');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
    });
*/

//El menú del carrito
var carritoMenuBtn=$('.car'),
carritomenu=$('.dropdown-menu');

carritoMenuBtn.click(function(){
        if(carritomenu.hasClass('show')){
            carritomenu.removeClass('show');
        }else{
            carritomenu.addClass('show');
        }
    });

});


//Los productos
let imagenes = document.querySelectorAll('.card-img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal-img');
let boton = document.querySelector('#modal-boton');

for(let i = 0; i<imagenes.length;i++){
    imagenes[i].addEventListener('click',function(e){
        modal.classList.toggle("modal-open");
        let src = e.target.src;
        img.setAttribute("src",src);
    });
}
boton.addEventListener('click',function(){
    modal.classList.toggle("modal-open");
});


//Para validar correo
function validarCorreo(correo){
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);
    if(esValido == true){
        console.log("EL correo introducido es válido");
    }
    else{
        alert("EL correo introducido no es válido");
    }
}

//Para validar nombres
function sololetras(e){
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyzáéíóúü";
    especiales = "8-37-38-46-164";
    teclado_especial = false;
    for(var i in especiales){
        if(key == especiales[i]){
            teclado_especial = true; break;
        }
    }
    if(letras.indexOf(teclado) == -1 && !teclado_especial){
        return false;
    }
}

//Para validar numeros
function solonumeros(e){
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    numeros = "0123456789";
    especiales = "8-37-38-46-164";
    teclado_especial = false;
    for(var i in especiales){
        if(key == especiales[i]){
            teclado_especial = true; break;
        }
    }
    if(numeros.indexOf(teclado) == -1 && !teclado_especial){
        return false;
    }
}


//Para validar formulario de contacto
/* function validar(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;
    let expresion = /\w+@\w+\.+[a-z]/;
    if(nombre ==="" || correo ==="" || telefono ==="" || mensaje ===""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios',
            timer: 2500,
            showConfirmButton: true
        })
        return false;
    }
    else if(!expresion.test(correo)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo no es válido',
            timer: 2500,
            showConfirmButton: true
        })
        return false;
    }
    else if(telefono.length>10){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El número de teléfono es muy largo',
            timer: 2500,
            showConfirmButton: true
        })
        return false;
    }
    else if(isNaN(telefono)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El número de teléfono ingresado no es un número',
            timer: 2500,
            showConfirmButton: true
        })
        return false;
    }
} */
