// 1. Reglas de Validación
const number = /^\d{1,15}$/;
const text = /^[a-zA-ZñÑá-úÁ-Ú\s]{2,50}$/;
const email = /^[a-zA-Z0-9._%+-]+@misena\.edu\.co$/;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

// 2. Acceder a los elementos que se van a alterar
const form = document.getElementById('formulariovalida');
const numDocumentoInput = form.numDocumento;
const numDocumentoFeedback = numDocumentoInput.nextElementSibling;
const passwordInput = form.password;
const confirmPasswordInput = form.confirmPassword;
const passwordFeedback = passwordInput.nextElementSibling;
const confirmPasswordFeedback = confirmPasswordInput.nextElementSibling;
const aceptarTerminosCheckbox = form.aceptarTerminos;
const fechaNacimientoInput = form.fechaNacimiento;
const fechaNacimientoFeedback = fechaNacimientoInput.nextElementSibling;

// Función para calcular la edad en años
function calcularEdad(fecha) {
  const hoy = new Date();
  const fechaNacimiento = new Date(fecha);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  return edad;
}

// 3. Validar número de documento
numDocumentoInput.addEventListener('input', (e) => {
  const numDocumento = e.target.value.trim();

  if (number.test(numDocumento)) {
    // Regla pasa la validación
    numDocumentoInput.classList.remove('is-invalid');
    numDocumentoInput.classList.add('is-valid');
    numDocumentoFeedback.textContent = '';
  } else {
    // Regla no pasa la validación
    numDocumentoInput.classList.remove('is-valid');
    numDocumentoInput.classList.add('is-invalid');
    numDocumentoFeedback.textContent = 'Ingrese un número de documento válido (máximo 15 dígitos).';
  }
});

// 4. Validar contraseña
passwordInput.addEventListener('input', (e) => {
  const passwordValue = e.target.value;

  if (password.test(passwordValue)) {
    // Regla pasa la validación
    passwordInput.classList.remove('is-invalid');
    passwordInput.classList.add('is-valid');
    passwordFeedback.textContent = '';
  } else {
    // Regla no pasa la validación
    passwordInput.classList.remove('is-valid');
    passwordInput.classList.add('is-invalid');
    passwordFeedback.textContent = 'La contraseña debe incluir mínimo una letra mayúscula, un número, una letra minúscula, un carácter y ser mínimo de 10 caracteres.';
  }
});

// 5. Validar confirmación de contraseña
confirmPasswordInput.addEventListener('input', (e) => {
  const confirmPasswordValue = e.target.value;

  if (confirmPasswordValue === passwordInput.value) {
    // Regla pasa la validación
    confirmPasswordInput.classList.remove('is-invalid');
    confirmPasswordInput.classList.add('is-valid');
    confirmPasswordFeedback.textContent = '';
  } else {
    // Regla no pasa la validación
    confirmPasswordInput.classList.remove('is-valid');
    confirmPasswordInput.classList.add('is-invalid');
    confirmPasswordFeedback.textContent = 'Las contraseñas no coinciden.';
  }
});

// 6. Validar checkbox de aceptar términos
aceptarTerminosCheckbox.addEventListener('change', () => {
  if (aceptarTerminosCheckbox.checked) {
    aceptarTerminosCheckbox.classList.remove('is-invalid');
  } else {
    aceptarTerminosCheckbox.classList.add('is-invalid');
  }
});

// 7. Validar fecha de nacimiento
fechaNacimientoInput.addEventListener('input', (e) => {
  const fechaNacimiento = e.target.value;
  const edad = calcularEdad(fechaNacimiento);

  if (edad >= 18 && new Date(fechaNacimiento) > new Date('2004-01-01')) {
    // Regla pasa la validación
    fechaNacimientoInput.classList.remove('is-invalid');
    fechaNacimientoInput.classList.add('is-valid');
    fechaNacimientoFeedback.textContent = '';
  } else {
    // Regla no pasa la validación
    fechaNacimientoInput.classList.remove('is-valid');
    fechaNacimientoInput.classList.add('is-invalid');
    fechaNacimientoFeedback.textContent = 'Debe ser mayor de 18 años y posterior a 2004-01-01.';
  }
});

// 8. Validar formulario al enviar
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validar todos los campos nuevamente
  numDocumentoInput.dispatchEvent(new Event('input'));
  passwordInput.dispatchEvent(new Event('input'));
  confirmPasswordInput.dispatchEvent(new Event('input'));
  aceptarTerminosCheckbox.dispatchEvent(new Event('change'));
  fechaNacimientoInput.dispatchEvent(new Event('input'));

  // Verificar si hay campos inválidos
  const isInvalid = form.querySelectorAll('.is-invalid').length > 0;

  if (isInvalid) {
    // Al menos un campo es inválido, no se envía el formulario
    alert('Por favor, complete correctamente el formulario.');
  } else {
    // Todos los campos son válidos, se puede enviar el formulario
    form.submit();
  }
});
