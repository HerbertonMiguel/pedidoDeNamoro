document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const message = document.getElementById('message');
    const noMessage = document.getElementById('noMessage');
    const heartsContainer = document.getElementById('hearts');

    // Adiciona um ouvinte de eventos para o movimento do mouse sobre a janela
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const noButtonRect = noButton.getBoundingClientRect();
        const noButtonX = noButtonRect.left;
        const noButtonY = noButtonRect.top;

        const distance = Math.sqrt(
            Math.pow(mouseX - (noButtonX + noButtonRect.width / 2), 2) +
            Math.pow(mouseY - (noButtonY + noButtonRect.height / 2), 2)
        );

        const maxDistance = 200;
        if (distance < maxDistance) {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const maxX = viewportWidth - noButtonRect.width;
            const maxY = viewportHeight - noButtonRect.height;

            let newX, newY;

            do {
                newX = Math.floor(Math.random() * maxX);
                newY = Math.floor(Math.random() * maxY);
            } while (Math.sqrt(Math.pow(newX - mouseX, 2) + Math.pow(newY - mouseY, 2)) < maxDistance);

            noButton.style.left = `${newX}px`;
            noButton.style.top = `${newY}px`;
        }
    });

    // Adiciona um ouvinte de eventos para o clique no botão "Sim"
    yesButton.addEventListener('click', () => {
        // Cria uma quantidade de corações para a animação
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.left = `${Math.random() * 100}%`;
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        }

        // Remove a classe 'hidden' e adiciona a classe 'visible' à mensagem para exibi-la
        message.classList.remove('hidden');
        message.classList.add('visible');
    });

    // Adiciona um ouvinte de eventos para o clique no botão "Não"
    noButton.addEventListener('click', () => {
        noMessage.classList.remove('hidden');
        noMessage.classList.add('visible');
    });
});
