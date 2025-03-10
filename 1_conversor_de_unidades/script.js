// Obter referências aos elementos HTML
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

// Função para converter as unidades
function convert() {
  // Obter os valores das unidades de entrada e saída
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  // Garantir que o valor de entrada seja numérico e válido
  const inputValue = parseFloat(inputElement.value);
  if (isNaN(inputValue)) {
    messageElement.textContent = "Por favor, insira um número válido.";
    outputElement.value = "";
    return;
  }

  // Verificar se as unidades de entrada e saída são iguais
  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }

  // Converter o valor de entrada para metros
  let meters;
  switch (fromValue) {
    case "m":
      meters = inputValue;
      break;
    case "km":
      meters = inputValue * 1000;
      break;
    case "cm":
      meters = inputValue / 100;
      break;
    case "mm":
      meters = inputValue / 1000;
      break;
  }

  // Converter os metros para a unidade de saída
  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      result = meters * 1000;
      break;
  }

  // Exibir o resultado na caixa de saída com duas casas decimais
  outputElement.value = result.toFixed(2);

  // Exibir a mensagem de conversão
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;
  const message = `${inputValue} ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
  messageElement.textContent = message;
}

// Adicionar um ouvinte de eventos ao botão de conversão
convertButton.addEventListener("click", convert);