document.body.style.margin = '0';
document.body.style.backgroundColor = '#111';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.height = '100vh';
document.body.style.fontFamily = 'sans-serif';

const answers = [
    "Yes", 
    "No", 
    "Maybe", 
    "Very doubtful", 
    "Ask again later", 
    "Without a doubt"
];

const appContainer = document.createElement('div');
appContainer.style.border = '2px solid #00ff00';
appContainer.style.padding = '40px';
appContainer.style.borderRadius = '10px';
appContainer.style.backgroundColor = '#1a1a2e';
appContainer.style.display = 'flex';
appContainer.style.flexDirection = 'column';
appContainer.style.alignItems = 'center';
appContainer.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.3)';

const questionInput = document.createElement('input');
questionInput.type = 'text';
questionInput.placeholder = 'Чи буде завтра MANGO?';
questionInput.style.padding = '15px 30px';
questionInput.style.fontSize = '18px';
questionInput.style.borderRadius = '25px';
questionInput.style.border = 'none';
questionInput.style.marginBottom = '30px';
questionInput.style.width = '350px';
questionInput.style.textAlign = 'center';
questionInput.style.backgroundColor = '#e6ccff';
questionInput.style.color = '#333';
questionInput.style.outline = 'none';

const magicBall = document.createElement('div');
magicBall.style.position = 'relative';
magicBall.style.width = '300px';
magicBall.style.height = '300px';
magicBall.style.borderRadius = '50%';
magicBall.style.background = 'radial-gradient(circle at 100px 100px, #ffffff, #6600cc, #000000)';
magicBall.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.5)';
magicBall.style.display = 'flex';
magicBall.style.alignItems = 'center';
magicBall.style.justifyContent = 'center';
magicBall.style.cursor = 'pointer';
magicBall.style.transition = 'transform 0.1s ease-in-out';

const answerText = document.createElement('div');
answerText.style.color = '#ffffff';
answerText.style.fontSize = '32px';
answerText.style.fontWeight = 'bold';
answerText.style.textShadow = '0 0 10px #ff00ff, 0 0 20px #ff00ff';
answerText.innerText = '';

const style = document.createElement('style');
style.innerHTML = `
    @keyframes steamFade {
        0% { transform: translateY(0) scale(1); opacity: 0.8; }
        100% { transform: translateY(-150px) scale(3); opacity: 0; }
    }
    .steam-particle {
        position: absolute;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: steamFade 1.5s ease-out forwards;
    }
`;

magicBall.appendChild(answerText);
appContainer.appendChild(questionInput);
appContainer.appendChild(magicBall);
document.body.appendChild(appContainer);
document.head.appendChild(style);

function createSteamEffect() {
    const particleCount = 300;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'steam-particle';
        const size = Math.random() * 30 + 20;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const leftPos = Math.random() * 200 + 50;
        const topPos = Math.random() * 100 + 100;
        
        particle.style.left = `${leftPos}px`;
        particle.style.top = `${topPos}px`;
        particle.style.animationDelay = `${Math.random() * 0.3}s`;
        magicBall.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

function getAnswer() {
    const question = questionInput.value.trim();
    if (questionInput.value.trim() === '') {
        answerText.innerText = 'Where question?';
        answerText.style.fontSize = '30px';
        return;
    }
    if (!question.endsWith('?')) {
        answerText.innerText = 'Where "?"';
        answerText.style.fontSize = '24px';
        return;
    }
    
    magicBall.style.transform = 'scale(0.95)';
    setTimeout(() => magicBall.style.transform = 'scale(1)', 100);
    createSteamEffect();
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerText.innerText = answers[randomIndex];
    answerText.style.fontSize = '32px';
}
magicBall.addEventListener('click', getAnswer);