import cipher from './cipher.js';
// Função encode:
// Chamar botão do HTML
const inputButton = document.getElementById("encodeBt");
// Dar a ele a função encode quando for clicado
inputButton.addEventListener("click", encodeMessage);
function encodeMessage()  {
// Chamar elemento offset, string, conectar cipher.encode a encodeMessage e estabelecer onde aparecerá a mensagem final
  const offset = Number(document.getElementById("encodeOffset").value);
  const string = document.getElementById("input").value;
  const encodeResult = cipher.encode(offset, string);

  return document.querySelector("#output").value = encodeResult;
}
// Função decode:
// Chamar botão do HTML
const decodeButton = document.getElementById("decodeBt");
// Dar a ele a função decodeMessage quando for clicado
decodeButton.addEventListener("click", decodeMessage);
function decodeMessage() {
// Chamar elemento offset, string, conectar cipher.decode a encodeMessage e estabelecer onde aparecerá a mensagem final
  const offset = Number(document.getElementById("decodeOffset").value);
  const string = document.getElementById("output").value;
  const decodeResult = cipher.decode(offset, string);

  return document.querySelector("#input").value = decodeResult;
}

// Função para recarregar a página
const refreshButton = document.querySelector("#refreshBt"); {
  const refreshPage = () => {
    location.reload();
  }
  refreshButton.addEventListener('click', refreshPage);
}

// Função para copiar o texto
const copyBt = document.querySelector("#copyBt"); 
copyBt.addEventListener('click', function(){
  copiedText();
})

function copiedText() {
  event.preventDefault();
  const codeText = document.querySelector("#output").value; {
    navigator.clipboard.writeText(codeText);
  }}