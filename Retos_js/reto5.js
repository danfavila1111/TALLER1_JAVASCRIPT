// Definición de la función "abrirModal"
function abrirModal(figura, operacion) {
  // Actualizar el título del modal con la figura y operación seleccionadas
  document.getElementById('modalTitulo').innerText = figura + ' - ' + operacion;

  // Configurar la visibilidad de los contenedores de entrada según la figura y operación seleccionadas
  document.getElementById('lado1Container').style.display = 'block';
  document.getElementById('lado2Container').style.display = 'block';
  document.getElementById('lado3Container').style.display = 'none';
  document.getElementById('baseContainer').style.display = 'none';
  document.getElementById('alturaContainer').style.display = 'none';

  // Configurar la visibilidad de los contenedores de entrada específicos según la figura seleccionada
  if (figura === 'Círculo') {
    document.getElementById('lado1Container').style.display = 'none';
    document.getElementById('lado2Container').style.display = 'none';
    document.getElementById('lado3Container').style.display = 'none';
    document.getElementById('baseContainer').style.display = 'none';
    document.getElementById('alturaContainer').style.display = 'none';
  } else if (figura === 'Triángulo') {
    if (operacion === 'area') {
      document.getElementById('baseContainer').style.display = 'block';
      document.getElementById('alturaContainer').style.display = 'block';
    } else {
      document.getElementById('lado1Container').style.display = 'block';
      document.getElementById('lado2Container').style.display = 'block';
      document.getElementById('lado3Container').style.display = 'block';
    }
  } else if (figura === 'Rectángulo') {
    document.getElementById('baseContainer').style.display = 'block';
    document.getElementById('alturaContainer').style.display = 'block';
  } else if (figura === 'Cuadrado') {
    document.getElementById('lado1Container').style.display = 'block';
    document.getElementById('lado2Container').style.display = 'none';
    document.getElementById('lado3Container').style.display = 'none';
    document.getElementById('baseContainer').style.display = 'none';
    document.getElementById('alturaContainer').style.display = 'none';
  }

  // Mostrar el modal de cálculo
  document.getElementById('modalCalculo').style.display = 'block';
}

// Definición de la función "calcular"
function calcular() {
  // Obtener la figura y operación del título del modal
  let figura = document.getElementById('modalTitulo').innerText.split(' - ')[0];
  let operacion = document.getElementById('modalTitulo').innerText.split(' - ')[1];

  // Realizar los cálculos según la figura y operación seleccionadas
  if (figura === 'Círculo') {
    let radio = Number(document.getElementById('inputLado1').value);
    if (operacion === 'perimetro') {
      let perimetro = 2 * Math.PI * radio;
      alert('Para el círculo con radio ' + radio + ': \nPerímetro: ' + perimetro);
    } else {
      let area = Math.PI * radio * radio;
      alert('Para el círculo con radio ' + radio + ': \nÁrea: ' + area);
    }
  } else if (figura === 'Triángulo') {
    let lado1 = Number(document.getElementById('inputLado1').value);
    let lado2 = Number(document.getElementById('inputLado2').value);
    let lado3 = Number(document.getElementById('inputLado3').value);
    if (operacion === 'perimetro') {
      let perimetro = lado1 + lado2 + lado3;
      alert('Para el triángulo con lados ' + lado1 + ', ' + lado2 + ', ' + lado3 + ': \nPerímetro: ' + perimetro);
    } else {
      let base = Number(document.getElementById('inputBase').value);
      let altura = Number(document.getElementById('inputAltura').value);
      let area = (base * altura) / 2;
      alert('Para el triángulo con base ' + base + ' y altura ' + altura + ': \nÁrea: ' + area);
    }
  } else if (figura === 'Rectángulo') {
    let base = Number(document.getElementById('inputBase').value);
    let altura = Number(document.getElementById('inputAltura').value);
    if (operacion === 'perimetro') {
      let perimetro = 2 * (base + altura);
      alert('Para el rectángulo con base ' + base + ' y altura ' + altura + ': \nPerímetro: ' + perimetro);
    } else {
      let area = base * altura;
      alert('Para el rectángulo con base ' + base + ' y altura ' + altura + ': \nÁrea: ' + area);
    }
  } else if (figura === 'Cuadrado') {
    let lado = Number(document.getElementById('inputLado1').value);
    if (operacion === 'perimetro') {
      let perimetro = 4 * lado;
      alert('Para el cuadrado con lado ' + lado + ': \nPerímetro: ' + perimetro);
    } else {
      let area = lado * lado;
      alert('Para el cuadrado con lado ' + lado + ': \nÁrea: ' + area);
    }
  }

  // Ocultar el modal de cálculo
  document.getElementById('modalCalculo').style.display = 'none';
}
