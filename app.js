// Função para ocultar o nome sorteado
function hideSelectedFriend() {
    const resultado = document.getElementById('resultado');
    resultado.style.display = resultado.style.display === 'none' ? 'block' : 'none';
}

// Função para mostrar ou ocultar a lista de participantes
function toggleParticipants() {
    const participantsList = document.getElementById('participantsList');
    participantsList.style.display = participantsList.style.display === 'none' ? 'block' : 'none';
}

// Função para adicionar participantes à lista
function insertFriend() {
    const inputField = document.getElementById('inputField');
    const participantsList = document.getElementById('participantsList');

    // Remove espaços em branco no início e no fim
    const newName = inputField.value.trim();

    // Verificar se o nome está vazio ou contém apenas espaços
    if (!newName) {
        alert('Por favor, digite um nome válido!');
        return;
    }

    // Verificar se o nome já existe na lista
    const existingNames = Array.from(participantsList.children).map(li => li.textContent);
    if (existingNames.includes(newName)) {
        alert(`O nome "${newName}" já foi adicionado à lista!`);
        return;
    }

    // Adicionar novo participante à lista
    const li = document.createElement('li');
    li.textContent = newName;
    participantsList.appendChild(li);

    // Exibir mensagem de sucesso
    alert(`Nome "${newName}" adicionado à lista com sucesso!`);

    // Limpar o campo de entrada após adicionar
    inputField.value = '';
}

// Função para sortear um participante aleatório
function drawRandomParticipant() {
    const participantsList = document.getElementById('participantsList');
    const participants = participantsList.children;

    if (participants.length > 0) {
        const randomIndex = Math.floor(Math.random() * participants.length);
        const selectedParticipant = participants[randomIndex];

        // Mostrar o resultado do sorteio
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = selectedParticipant.textContent;
        resultado.appendChild(li);

        // Animação de confete (opcional)
        confetti({
            particleCount: 100,
            spread: 180,
            origin: { y: 0.5 }
        });
    } else {
        alert('Adicione participantes antes de sortear!');
    }
}
