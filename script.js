const chatBoxA = document.getElementById('chatBoxA');
const chatBoxB = document.getElementById('chatBoxB');

const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');

// Enter key listener
inputA.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage('A');
});
inputB.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage('B');
});

function sendMessage(user) {
    const input = user === 'A' ? inputA : inputB;
    const message = input.value.trim();
    if (!message) return;

    const time = new Date().toLocaleTimeString();

    if (user === 'A') {
        addMessage(chatBoxA, message, 'self');   // A ka right green
        addMessage(chatBoxB, message, 'other');  // B ka left blue
    } else {
        addMessage(chatBoxB, message, 'self');   // B ka right green
        addMessage(chatBoxA, message, 'other');  // A ka left blue
    }

    input.value = '';
}

function addMessage(container, text, type) {
    const div = document.createElement('div');
    div.classList.add('message', type);
    div.innerHTML = `${text}<span class="time">${new Date().toLocaleTimeString()}</span>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}
