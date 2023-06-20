// Definición de la función "abrirModal"
function abrirModal(figura, tipoCalculo) {
  // Actualizar el título del modal con la figura y el tipo de cálculo seleccionados
  document.getElementById('modalTitulo').textContent = figura + ' - ' + tipoCalculo;

  // Reiniciar los valores de los campos de entrada
  document.getElementById('inputRadio').value = '';
  document.getElementById('inputLado1').value = '';
  document.getElementById('inputLado2').value = '';
  document.getElementById('inputLado3').value = '';
  document.getElementById('inputBase').value = '';
  document.getElementById('inputAltura').value = '';

  // Configurar la visibilidad de los contenedores de entrada según la figura y tipo de cálculo seleccionados
  if (figura === 'Círculo') {
    document.getElementById('radioContainer').style.display = 'block';
    document.getElementById('ladosContainer').style.display = 'none';
    document.getElementById('baseAlturaContainer').style.display = 'none';
  } else if (figura === 'Triángulo') {
    if (tipoCalculo === 'perimetro') {
      document.getElementById('ladosContainer').style.display = 'block';
      document.getElementById('baseAlturaContainer').style.display = 'none';
      document.getElementById('radioContainer').style.display = 'none';
    } else if (tipoCalculo === 'area') {
      document.getElementById('ladosContainer').style.display = 'none';
      document.getElementById('baseAlturaContainer').style.display = 'block';
      document.getElementById('radioContainer').style.display = 'none';
    }
  } else if (figura === 'Rectángulo') {
    document.getElementById('radioContainer').style.display = 'none';
    document.getElementById('ladosContainer').style.display = 'none';
    document.getElementById('baseAlturaContainer').style.display = 'block';
  } else if (figura === 'Cuadrado') {
    document.getElementById('radioContainer').style.display = 'none';
    document.getElementById('ladoContainer').style.display = 'block';
    document.getElementById('baseAlturaContainer').style.display = 'none';
  }

  // Mostrar el modal de cálculo utilizando Bootstrap
  let modal = new bootstrap.Modal(document.getElementById('modalCalculo'));
  modal.show();
}

// Definición de la función "calcular"
function calcular() {
  // Obtener la figura y tipo de cálculo del título del modal
  let figura = document.getElementById('modalTitulo').textContent.split(' - ')[0];
  let tipoCalculo = document.getElementById('modalTitulo').textContent.split(' - ')[1];
  let resultado;

  // Realizar los cálculos según la figura y tipo de cálculo seleccionados
  if (figura === 'Círculo') {
    let radio = parseFloat(document.getElementById('inputRadio').value);

    if (tipoCalculo === 'perimetro') {
      resultado = 2 * Math.PI * radio;
      alert('El perímetro del círculo es: ' + resultado);
    } else if (tipoCalculo === 'area') {
      resultado = Math.PI * radio * radio;
      alert('El área del círculo es: ' + resultado);
    }
  } else if (figura === 'Triángulo') {
    if (tipoCalculo === 'perimetro') {
      let lado1 = parseFloat(document.getElementById('inputLado1').value);
      let lado2 = parseFloat(document.getElementById('inputLado2').value);
      let lado3 = parseFloat(document.getElementById('inputLado3').value);
      resultado = lado1 + lado2 + lado3;
      alert('El perímetro del triángulo es: ' + resultado);
    } else if (tipoCalculo === 'area') {
      let base = parseFloat(document.getElementById('inputBase').value);
      let altura = parseFloat(document.getElementById('inputAltura').value);
      resultado = (base * altura) / 2;
      alert('El área del triángulo es: ' + resultado);
    }
  } else if (figura === 'Rectángulo') {
    let base = parseFloat(document.getElementById('inputBase').value);
    let altura = parseFloat(document.getElementById('inputAltura').value);

    if (tipoCalculo === 'perimetro') {
      resultado = 2 * (base + altura);
      alert('El perímetro del rectángulo es: ' + resultado);
    } else if (tipoCalculo === 'area') {
      resultado = base * altura;
      alert('El área del rectángulo es: ' + resultado);
    }
  } else if (figura === 'Cuadrado') {
    let lado = parseFloat(document.getElementById('inputLado1cuadrado').value);

    if (tipoCalculo === 'perimetro') {
      resultado = 4 * lado;
      alert('El perímetro del cuadrado es: ' + resultado);
    } else if (tipoCalculo === 'area') {
      resultado = lado * lado;
      alert('El área del cuadrado es: ' + resultado);
    }
  }
}
