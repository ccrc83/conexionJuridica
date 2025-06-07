// Validación del formulario de contacto + navbar dinámica al hacer scroll
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // FORMULARIO DE CONTACTO
    var form = document.getElementById('formContacto');
    var formAlert = document.getElementById('formAlert');

    if (form && formAlert) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        // Limpia alertas previas
        formAlert.innerHTML = '';

        if (!form.checkValidity()) {
          form.classList.add('was-validated');

          // Enfoca el primer campo inválido
          const firstInvalidField = form.querySelector(':invalid');
          if (firstInvalidField) firstInvalidField.focus();

          return;
        }

        // Simulación de envío exitoso
        formAlert.innerHTML = `
          <div class="alert alert-success" role="alert">
            Tu mensaje ha sido enviado correctamente. ¡Gracias por contactarnos!
          </div>
        `;

        // Limpia formulario
        form.reset();
        form.classList.remove('was-validated');

        // Borra el mensaje después de 5 segundos
        setTimeout(() => {
          formAlert.innerHTML = '';
        }, 5000);
      });
    }

    // NAVBAR CAMBIA DE ESTILO AL HACER SCROLL
    var navbar = document.getElementById('mainNav');

    if (navbar) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  });
})();
