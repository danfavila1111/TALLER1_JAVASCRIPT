// Definición de la función "convertirTemperatura"
function convertirTemperatura() {
  // Obtener el valor ingresado en el campo de entrada con el id "inputTemperatura" y convertirlo a un número de punto flotante
  let temperatura = parseFloat(document.getElementById("inputTemperatura").value);

  // Obtener el valor seleccionado en el elemento de selección con el id "selectOrigen" y almacenarlo en la variable "unidadOrigen"
  let unidadOrigen = document.getElementById("selectOrigen").value;

  // Obtener el valor seleccionado en el elemento de selección con el id "selectDestino" y almacenarlo en la variable "unidadDestino"
  let unidadDestino = document.getElementById("selectDestino").value;

  // Declarar la variable "temperaturaConvertida" para almacenar el resultado de la conversión
  let temperaturaConvertida;

  // Evaluar las combinaciones de unidades de origen y destino utilizando la estructura "if-else if"
  if (unidadOrigen === "celsius" && unidadDestino === "fahrenheit") {
    // Si la unidad de origen es Celsius y la unidad de destino es Fahrenheit, realizar la conversión correspondiente
    temperaturaConvertida = (temperatura * 9/5) + 32;
  } else if (unidadOrigen === "celsius" && unidadDestino === "kelvin") {
    // Si la unidad de origen es Celsius y la unidad de destino es Kelvin, realizar la conversión correspondiente
    temperaturaConvertida = temperatura + 273.15;
  } else if (unidadOrigen === "fahrenheit" && unidadDestino === "celsius") {
    // Si la unidad de origen es Fahrenheit y la unidad de destino es Celsius, realizar la conversión correspondiente
    temperaturaConvertida = (temperatura - 32) * 5/9;
  } else if (unidadOrigen === "fahrenheit" && unidadDestino === "kelvin") {
    // Si la unidad de origen es Fahrenheit y la unidad de destino es Kelvin, realizar la conversión correspondiente
    temperaturaConvertida = (temperatura - 32) * 5/9 + 273.15;
  } else if (unidadOrigen === "kelvin" && unidadDestino === "celsius") {
    // Si la unidad de origen es Kelvin y la unidad de destino es Celsius, realizar la conversión correspondiente
    temperaturaConvertida = temperatura - 273.15;
  } else if (unidadOrigen === "kelvin" && unidadDestino === "fahrenheit") {
    // Si la unidad de origen es Kelvin y la unidad de destino es Fahrenheit, realizar la conversión correspondiente
    temperaturaConvertida = (temperatura - 273.15) * 9/5 + 32;
  } else {
    // Si no se cumple ninguna de las combinaciones anteriores, mostrar una alerta de conversión no válida y salir de la función
    alert("Conversión de temperatura no válida");
    return;
  }

  // Redondear la temperatura convertida a 2 decimales
  temperaturaConvertida = temperaturaConvertida.toFixed(2);

  // Mostrar un cuadro de alerta con el resultado de la conversión
  alert("El resultado de la conversión es: " + temperaturaConvertida);
}
