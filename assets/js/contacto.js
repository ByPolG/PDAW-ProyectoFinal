emailjs.init('NWHnP-LPHUaaYZeMJ')

const btn = document.getElementById('button-contacto');
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_asturware';
    const templateID = 'template_m1q1bsi';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            // Obtenemos los valores del formulario
            const cliente = document.getElementById('nombre');
            const correo = document.getElementById('correo');
            const telefono = document.getElementById('telefono');
            const mensaje = document.getElementById('mensaje');

            // Mostramos mensaje de éxito con SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Se envió el mensaje',
                timer: 2500,
                showConfirmButton: false
            });

            // Redirigir a la página de contacto
            window.location = "contacto.html";

            // Vaciamos los campos del formulario
            cliente.value = '';
            correo.value = '';
            telefono.value = '';
            mensaje.value = '';
        }, (err) => {
            btn.value = 'Enviar';
            alert(JSON.stringify(err));
        });
});



