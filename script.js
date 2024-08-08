function copy() {
    navigator.clipboard.writeText("7621602");
  }

function toggleChatbox() {
    const chatbox = document.querySelector('.chatbox');
    chatbox.classList.toggle('minimized');

    // Change the button text based on the chatbox state
    const minimizeButton = document.getElementById('minimizeButton');
    if (chatbox.classList.contains('minimized')) {
        minimizeButton.textContent = '+';
    } else {
        minimizeButton.textContent = '−';
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user');
        messageElement.textContent = message;

        document.querySelector('.messages').appendChild(messageElement);
        input.value = '';
        input.focus();
        
        // Scroll to the bottom of the chatbox
        document.querySelector('.chatbox-body').scrollTop = document.querySelector('.chatbox-body').scrollHeight;
    }
}
