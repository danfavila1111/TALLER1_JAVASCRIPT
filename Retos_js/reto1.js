// Definición de la función "enviar"
function enviar() {
  // Obtener el valor ingresado en el campo de entrada con el id "wordInput" y almacenarlo en la variable "word"
  let word = document.getElementById("wordInput").value;

  // Obtener el valor seleccionado en el elemento de selección con el id "optionsSelect" y almacenarlo en la variable "optionn"
  let optionn = document.getElementById("optionsSelect").value;

  // Declarar la variable "result" para almacenar el resultado
  let result;

  // Evaluar el valor de "optionn" usando la estructura "switch"
  switch (optionn) {
    case "1":
      // Si "optionn" es igual a "1", asignar a "result" el mensaje con la longitud de la palabra
      result = "La longitud de la palabra es: " + word.length;
      break;
    case "2":
      // Si "optionn" es igual a "2", asignar a "result" el mensaje con la palabra en mayúsculas
      result = "La palabra en mayúsculas es: " + word.toUpperCase();
      break;
    case "3":
      // Si "optionn" es igual a "3", asignar a "result" el mensaje con la palabra en minúsculas
      result = "La palabra en minúsculas es: " + word.toLowerCase();
      break;
    case "4":
      // Si "optionn" es igual a "4", asignar a "result" el mensaje con el primer carácter de la palabra
      result = "El primer carácter de la palabra es: " + word.charAt(0);
      break;
    default:
      // Si "optionn" no coincide con ninguna de las opciones anteriores, asignar a "result" un mensaje de opción inválida
      result = "Opción inválida";
  }

  // Mostrar un cuadro de alerta con el contenido de "result"
  alert(result);
}
