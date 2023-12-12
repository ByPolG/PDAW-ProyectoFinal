function iniciarSesion() {
    var usuarioIngresado = document.getElementById("usuario").value;
    var passwordIngresado = document.getElementById("password").value;

    // Verificamos si ya hay usuarios registrados
    var usuariosRegistrados = localStorage.getItem("usuarios");
    var listaUsuarios = usuariosRegistrados ? JSON.parse(usuariosRegistrados) : [];

    // Verificamos las credenciales ingresadas
    var usuarioValido = listaUsuarios.find(function(usuario) {
        return usuario.correo === usuarioIngresado && usuario.password === passwordIngresado;
    });

    if (usuarioValido) {
        // Indicamos que el usuario ha iniciado sesión
        localStorage.setItem("usuario", usuarioIngresado);
        localStorage.setItem("sesionIniciada", "true");
        window.location.href = "index.html";
        return false;
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
        return false;
    }
}