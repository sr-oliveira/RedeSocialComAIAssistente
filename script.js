// Captura o formulário e o campo de entrada do usuário
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

// Captura a caixa de bate-papo
const chatBox = document.getElementById('chat-box');

// Função para adicionar uma mensagem à caixa de bate-papo
function addMessageToChatBox(message, isUserMessage) {
  const li = document.createElement('li');
  li.textContent = message;
  li.classList.add(isUserMessage ? 'user-message' : 'bot-message');
  chatBox.appendChild(li);
}

// Captura o evento de envio do formulário
chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Captura a mensagem digitada pelo usuário
  const userMessage = userInput.value;

  // Adiciona a mensagem do usuário à caixa de bate-papo
  addMessageToChatBox(userMessage, true);

  // Faz a chamada à API da IA para obter a resposta
  const response = await fetch('/api/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: userMessage
    })
  });

  // Converte a resposta para
