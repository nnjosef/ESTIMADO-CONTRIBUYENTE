// Obtener el formulario y el mensaje de confirmación
const form = document.getElementById('surveyForm');
const confirmationMessage = document.createElement('p');
confirmationMessage.textContent = '¡Gracias por tu opinión!';

// Función para validar el formulario antes de enviarlo
function validarFormulario(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
  // Validar que se haya seleccionado una opción para todas las preguntas obligatorias
  const preguntas = ['q1', 'q2', 'q3', 'q4'];
  let formularioValido = true;
  
  preguntas.forEach(pregunta => {
    const respuesta = form.elements[pregunta].value;
    if (!respuesta) {
      formularioValido = false;
      alert(`Por favor, responde la pregunta ${pregunta}`);
    }
  });
  
  if (formularioValido) {
    // Aquí podrías enviar los datos del formulario a través de AJAX o guardarlos de alguna manera
    form.reset(); // Limpiar el formulario
    form.appendChild(confirmationMessage); // Mostrar mensaje de confirmación
  }
}

// Escuchar el evento submit del formulario
form.addEventListener('submit', validarFormulario);
