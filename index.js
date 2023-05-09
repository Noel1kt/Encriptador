function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("imagen");
    let respuesta = document.getElementById("mensaje").value;
    let encriptado = document.getElementById("encriptado");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("mensaje").value = textoCifrado;
      encriptado.style.display = "none"; 
      
    } else {
      muñeco.src = "img/muñeco.png";
      tituloMensaje.textContent = "Debes escribir un mensaje para poder encriptar";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("imagen");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("mensaje").value = textoCifrado;
        encriptado.style.display = "none"; 
      } else {
        muñeco.src = "img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
  }

  function copyText() {
    navigator.clipboard.writeText(document.getElementById("mensaje").value);
    alert("Texto copiado")
  }