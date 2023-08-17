const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

const predefinedAnswers = {
    'hello': 'Hello! How can I assist you?',
    'how are you': "I'm just a computer program, but I'm here to help!",
    'bye': 'Goodbye! Have a great day!',
    'help line number': '9133058989',
    'who is the developer of this website': 'Mr.Bavisetti Komal Sai',
    'my payment failed': 'Sorry for inconvenience your money will be debited in your account within 3-4 business days'
    // Add more predefined answers as needed
};

function displayMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', isUser ? 'user' : 'assistant');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processUserInput() {
    const userMessage = userInput.value.toLowerCase().trim();
    displayMessage(userMessage, true);

    const answer = predefinedAnswers[userMessage] || "I'm sorry, I don't have an answer for that.";
    displayMessage(answer, false);

    userInput.value = '';
}

sendButton.addEventListener('click', () => {
    if (userInput.value.trim() !== '') {
        processUserInput();
    }
});

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && userInput.value.trim() !== '') {
        processUserInput();
    }
});
