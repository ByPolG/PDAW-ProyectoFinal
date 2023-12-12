// Verificamos si hay un usuario almacenado en localStorage y si la sesión está iniciada
var usuarioAlmacenado = localStorage.getItem("usuario");
var sesionIniciada = localStorage.getItem("sesionIniciada");

if (usuarioAlmacenado && sesionIniciada === "true") {
    console.log("Usuario autenticado:", usuarioAlmacenado);
    // Cambiamos la imagen del icono de inicio de sesión
    var iconoInicioSesion = document.querySelector('.link-item[href="inicio-sesion.html"] img');
    if (iconoInicioSesion) {
        iconoInicioSesion.src = "assets/img/recursos/cerrar_s.png";

        // Agregamos un evento de click para revertir la imagen y redirigir a inicio-sesion.html
        iconoInicioSesion.addEventListener('click', function() {
            // Indicamos que la sesión ha finalizado
            localStorage.removeItem("sesionIniciada");
            // Cambiamos de nuevo a la imagen original
            iconoInicioSesion.src = "assets/img/recursos/iniciar_s.png";
            // Redirigimos a inicio-sesion.html
            window.location.href = "inicio-sesion.html";
        });
    }
}