// Seleção de elementos no DOM
let sliderElement = document.querySelector("#slider"); // Referência ao elemento de id "slider"
let buttonElement = document.querySelector("#button"); // Referência ao elemento de id "button"
let sizePassword = document.querySelector("#valor"); // Referência ao elemento de id "valor"
let password = document.querySelector("#password"); // Referência ao elemento de id "password"
let containerPassword = document.querySelector("#container-password"); // Referência ao elemento de id "container-password"

// Conjunto de caracteres para a geração de senhas
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';

// Variável para armazenar a senha gerada
let novaSenha = '';

// Atualiza o valor de "valor" com o valor atual do slider
sizePassword.innerHTML = sliderElement.value;

// Define um evento para atualizar "valor" quando o usuário move o slider
sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value;
}

// Função para gerar senhas aleatórias
function generatePassword() {
  let pass = '';
  // Gera a senha com base no valor do slider
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  // Exibe a senha gerada no elemento "password"
  password.innerHTML = pass;

  // Armazena a senha gerada na variável "novaSenha"
  novaSenha = pass;

  // Torna visível o elemento de container de senha
  containerPassword.classList.remove("hide");
}

// Função para copiar a senha para a área de transferência
function copyPassword() {
  // Exibe um alerta informando que a senha foi copiada com sucesso
  alert("Senha copiada com sucesso!");

  // Utiliza a API Clipboard para copiar "novaSenha" para a área de transferência
  navigator.clipboard.writeText(novaSenha);
}

// Função para exibir o histórico de senhas geradas
function showPasswordHistory() {
    // Crie uma lista ordenada para exibir as senhas no histórico
    const historyList = document.createElement("ol");
  
    // Preencha a lista com as senhas no histórico
    for (let i = 0; i < passwordHistory.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = passwordHistory[i];
      historyList.appendChild(listItem);
    }
  
    // Exiba o histórico no documento
    document.body.appendChild(historyList);
  }