const texto = document.querySelector('[data-texto]');
const mensaje = document.querySelector('[data-mensaje]');
const copiarTexto = document.querySelector('.texto-encriptado');
const borrarMsj = document.querySelector('.ningun-msj');
const borrarMsj2 = document.querySelector('.texto-desencriptar');
const copiar = document.querySelector('.copiar');

//Funcion para el evento click del boton Encriptar
function btnEncriptar() {
  const textoEncriptado = encriptar(texto.value);

  mensaje.value = textoEncriptado;

  if (mensaje.value == '') {
    alert('EL campo no puede estar vacio');
  } else {
    mensaje.style.backgroundImage = 'none';
  }

  texto.value = '';

  borrarCampoMsj();
}

//Funcion para el evento click del boton Desencriptar
function btnDesencriptar() {
  const textoDesencriptado = desencriptar(texto.value);
  mensaje.value = textoDesencriptado;
  texto.value = '';
}
//Funcion que encripta los textos
function encriptar(palabraEncriptada) {
  const patronCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];

  palabraEncriptada = palabraEncriptada.toLowerCase();

  for (let i = 0; i < patronCodigo.length; i++) {
    if (palabraEncriptada.includes(patronCodigo[i][0])) {
      palabraEncriptada = palabraEncriptada.replaceAll(
        patronCodigo[i][0],
        patronCodigo[i][1]
      );
    }
  }

  if ((mensaje.value = palabraEncriptada)) {
    copiar.style.display = 'block';
  }
  return palabraEncriptada;
}

//Funcion que desencripta los textos
function desencriptar(palabraDesencriptada) {
  const patronCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  palabraDesencriptada = palabraDesencriptada.toLowerCase();

  for (let i = 0; i < patronCodigo.length; i++) {
    if (palabraDesencriptada.includes(patronCodigo[i][1])) {
      palabraDesencriptada = palabraDesencriptada.replaceAll(
        patronCodigo[i][1],
        patronCodigo[i][0]
      );
    }
  }
  if ((mensaje.value = palabraDesencriptada)) {
    copiar.style.display = 'block';
  } else {
    copiar.style.display = 'none';
  }
  return palabraDesencriptada;
}

//Funcion que borra los avisos de mensaje no encontrado
function borrarCampoMsj() {
  if (mensaje.value == '') {
  } else {
    borrarMsj.style.display = 'none';
  }
  if (mensaje.value == '') {
  } else {
    borrarMsj2.style.display = 'none';
  }
}

//Funcion que copia el mensaje encriptado / desencriptado
function copiarMensaje() {
  navigator.clipboard.writeText(copiarTexto.value);
  ocultarBoton();
}

//Funcion que limpia la caja del mensaje encriptado / desencriptad
function limpiarTexto() {
  copiarTexto.value = '';
}

//funcion que oculta el boton copiar
function ocultarBoton() {
  if (mensaje.value == '') {
  } else {
    copiar.style.display = 'none';
  }
}

//Evento que llama a las funciones Copiar y Limpiar
copiar.addEventListener('click', () => {
  copiarMensaje();

  limpiarTexto();
});
