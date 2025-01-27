const animationContainer = document.createElement('div');
animationContainer.id = 'animation-container';
document.body.appendChild(animationContainer);

const createTeaCup = () => {
  const cup = document.createElement('div');
  cup.classList.add('tea-cup');
  cup.style.left = `${Math.random() * 100}%`;
  cup.style.top = `${Math.random() * 80}%`;
  cup.style.animationDelay = `${Math.random() * 5}s`;
  animationContainer.appendChild(cup);
  cup.addEventListener('animationend', () => cup.remove());
};


setInterval(createTeaCup, 2000);
