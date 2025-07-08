// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Create burst effect when button is clicked
function createBurst() {
    const colors = ['#8491ab', '#F5C3C6', '#ffffff'];

    for (let i = 0; i < 15; i++) {
        const burst = document.createElement('div');
        burst.style.position = 'fixed';
        burst.style.left = '50%';
        burst.style.top = '50%';
        burst.style.width = '8px';
        burst.style.height = '8px';
        burst.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        burst.style.borderRadius = '50%';
        burst.style.pointerEvents = 'none';
        burst.style.zIndex = '1000';

        const angle = (i / 15) * 360;
        const distance = 100 + Math.random() * 100;

        burst.style.animation = `burstOut 1s ease-out forwards`;
        burst.style.setProperty('--angle', angle + 'deg');
        burst.style.setProperty('--distance', distance + 'px');

        document.body.appendChild(burst);

        setTimeout(() => {
            burst.remove();
        }, 1000);
    }
}

// Mouse-based interaction for floating shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;

        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Initialize particles
createParticles();
