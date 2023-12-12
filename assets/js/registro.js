function registrarUsuario() {
    var nombre = document.getElementsByName("nombre")[0].value;
    var apellidos = document.getElementsByName("apellidos")[0].value;
    var ciudad = document.getElementsByName("ciudad")[0].value;
    var pais = document.getElementsByName("pais")[0].value;
    var telefono = document.getElementsByName("telefono")[0].value;
    var correo = document.getElementsByName("correo")[0].value;
    var password = document.getElementsByName("password")[0].value;

    // Verificamos si ya hay usuarios registrados
    var usuariosRegistrados = localStorage.getItem("usuarios");
    var listaUsuarios = usuariosRegistrados ? JSON.parse(usuariosRegistrados) : [];

    // Verificamos si el correo ya está registrado
    if (usuarioExistente(correo, listaUsuarios)) {
        alert("El correo electrónico ya está registrado. Por favor, inicia sesión.");
        return false;
    }

    // Creamos un nuevo usuario
    var nuevoUsuario = {
        nombre: nombre,
        apellidos: apellidos,
        ciudad: ciudad,
        pais: pais,
        telefono: telefono,
        correo: correo,
        password: password
    };

    // Agregamos el nuevo usuario a la lista
    listaUsuarios.push(nuevoUsuario);

    // Almacenamos la lista actualizada en localStorage
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

    // Indicamos que el usuario ha iniciado sesión
    localStorage.setItem("usuario", correo);
    localStorage.setItem("sesionIniciada", "true");

    // Redirigimos a la página principal o la página que se quiera, en este caso index
    window.location.href = "index.html";

    // Devolver false para evitar que el formulario se envíe
    return false;
}

function usuarioExistente(correo, usuarios) {
    // Verificamos si el correo ya está registrado
    return usuarios.some(function (usuario) {
        return usuario.correo === correo;
    });
}