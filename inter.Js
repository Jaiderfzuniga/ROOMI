

// *******************************chatbot flotante
function toggleChat() {
    const chatContainer = document.getElementById('chatbotContainer');
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const messageText = input.value.trim();

    if (messageText) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.textContent = messageText;
        document.getElementById('chatbotMessages').appendChild(messageDiv);

        // Aquí puedes agregar la lógica para la respuesta del chatbot
        const botResponse = document.createElement('div');
        botResponse.className = 'message bot-message';
        botResponse.textContent = "Gracias por tu mensaje: " + messageText; // Ejemplo de respuesta
        document.getElementById('chatbotMessages').appendChild(botResponse);

        input.value = ''; // Limpiar el campo de entrada
    }
}

// *******************************Función para verificar si el correo y la contraseña son válidos
function validateForm() {
    // Obtener los valores del correo y la contraseña
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar correo con expresión regular
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return false; // Evitar el envío del formulario si el correo es inválido
    }

    // Validar longitud de la contraseña
    if (password.length > 8) {
        alert("La contraseña no puede tener más de 8 caracteres.");
        return false; // Evitar el envío si la contraseña es muy larga
    }

    // Si todo está bien, redirigir a la página IMC.html
    window.location.href = "IMC.html"; // Redirige a la página IMC.html
    return false; // Evita que el formulario sea enviado de manera tradicional
}
