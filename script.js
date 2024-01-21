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
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.getAttribute('data-product');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            const cartItem = document.createElement('li');
            cartItem.innerHTML = `${productName} - $${productPrice.toFixed(2)}`;
            cartItemsList.appendChild(cartItem);

            updateCartTotal(productPrice);
        });
    });

    function updateCartTotal(price) {
        const currentTotal = parseFloat(cartTotal.textContent.substring(1));
        const newTotal = currentTotal + price;
        cartTotal.textContent = `$${newTotal.toFixed(2)}`;
    }
});


        // Sample user data (in a real application, this should be stored securely on a server)
    // Sample user data (in a real application, this should be stored securely on a server)
    const userData = {
        username: "komal sai",
    password: "123"
            };

    function checkLogin() {
                const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    if (usernameInput === userData.username && passwordInput === userData.password) {
        // Redirect to the index page (change 'index.html' to your actual index page URL)
        window.location.href = 'index.html';
                } else {
        document.getElementById("message").innerHTML = "Invalid credentials. Please register.";
    document.getElementById("registerButton").style.display = "block"; // Show the "Register" button
                }
            }

    function redirectToRegisterPage() {
        // Redirect to the registration page (change 'register.html' to your actual registration page URL)
        window.location.href = 'register.html';
            }

// Get all the question elements
const questions = document.querySelectorAll('.question');

// Add click event listeners to each question
questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Get the next sibling (the answer)

        // Toggle the answer's visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});


