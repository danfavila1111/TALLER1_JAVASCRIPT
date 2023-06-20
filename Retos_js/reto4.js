// Definición de la función "determinarTipoTriangulo"
function determinarTipoTriangulo() {
  // Obtener el valor ingresado en el campo de entrada con el id "inputLado1" y convertirlo a un número de punto flotante
  let lado1 = parseFloat(document.getElementById("inputLado1").value);

  // Obtener el valor ingresado en el campo de entrada con el id "inputLado2" y convertirlo a un número de punto flotante
  let lado2 = parseFloat(document.getElementById("inputLado2").value);

  // Obtener el valor ingresado en el campo de entrada con el id "inputLado3" y convertirlo a un número de punto flotante
  let lado3 = parseFloat(document.getElementById("inputLado3").value);

  // Evaluar las longitudes de los lados del triángulo utilizando la estructura "if-else if"
  if (lado1 === lado2 && lado2 === lado3) {
    // Si los tres lados son iguales, mostrar una alerta de triángulo equilátero
    alert("El triángulo es equilátero");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    // Si al menos dos lados son iguales, mostrar una alerta de triángulo isósceles
    alert("El triángulo es isósceles");
  } else {
    // Si no se cumple ninguna de las condiciones anteriores, mostrar una alerta de triángulo escaleno
    alert("El triángulo es escaleno");
  }
}
