window.addEventListener('load', () => {
    const apiKey = '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'; // Replace with your OpenAI API key
    const chatDisplay = document.getElementById('chat-display');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // ... rest of your code ...

    // Event listener for the send button
    sendButton.addEventListener('click', sendMessage);
});