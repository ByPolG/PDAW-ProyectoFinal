function cambiarContrasena() {
    var correo = document.getElementsByName("correo")[0].value;
    var nuevaContrasena = document.getElementsByName("password")[0].value;
    var confirmarContrasena = document.getElementsByName("newpassword")[0].value;

    // Verificamos si ya hay usuarios registrados
    var usuariosRegistrados = localStorage.getItem("usuarios");
    var listaUsuarios = usuariosRegistrados ? JSON.parse(usuariosRegistrados) : [];

    // Buscamos el usuario por su correo electrónico
    var usuario = listaUsuarios.find(function (user) {
        return user.correo === correo;
    });

    // Verificamos si el usuario existe
    if (!usuario) {
        alert("El correo electrónico no está registrado.");
        return false;
    }

    // Verificamos si las contraseñas coinciden
    if (nuevaContrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        return false;
    }

    // Cambiamos la contraseña del usuario
    usuario.password = nuevaContrasena;

    // Actualizamos la lista de usuarios en localStorage
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

    alert("Contraseña cambiada exitosamente.");
    // Despues de cambiar la contraseña, nos redirigimos a la pagina de inicio sesion
    window.location.href = "inicio-sesion.html";

    // Devolvemos false para evitar que el formulario se envíe
    return false;
}