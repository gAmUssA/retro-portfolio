// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add random glitch effect to elements with glitch class
    const glitchElements = document.querySelectorAll('.glitch');
    
    function randomGlitch() {
        glitchElements.forEach(element => {
            // Only apply glitch effect randomly
            if (Math.random() > 0.95) {
                element.classList.add('active-glitch');
                setTimeout(() => {
                    element.classList.remove('active-glitch');
                }, 200);
            }
        });
        
        // Schedule next glitch
        setTimeout(randomGlitch, Math.random() * 5000);
    }
    
    // Start the random glitch effect
    randomGlitch();
    
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, just show a success message
            alert(`Thanks for your message, ${name}! I'll get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add retro cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('retro-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Random static effect
    function createStaticEffect() {
        const staticContainer = document.createElement('div');
        staticContainer.classList.add('static-container');
        document.body.appendChild(staticContainer);
        
        for (let i = 0; i < 100; i++) {
            const staticPixel = document.createElement('div');
            staticPixel.classList.add('static-pixel');
            staticPixel.style.left = Math.random() * 100 + 'vw';
            staticPixel.style.top = Math.random() * 100 + 'vh';
            staticPixel.style.animationDelay = Math.random() * 5 + 's';
            staticContainer.appendChild(staticPixel);
        }
    }
    
    createStaticEffect();
    
    // Add flicker effect to terminal
    const terminal = document.querySelector('.terminal');
    if (terminal) {
        setInterval(() => {
            if (Math.random() > 0.95) {
                terminal.classList.add('flicker');
                setTimeout(() => {
                    terminal.classList.remove('flicker');
                }, 100);
            }
        }, 2000);
    }
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
    
    // Add typing effect to elements with typing class
    const typingElements = document.querySelectorAll('.typing');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, Math.random() * 100 + 50);
            }
        }
        
        typeWriter();
    });
});

// Add additional CSS styles for elements created in JS
const style = document.createElement('style');
style.textContent = `
    .retro-cursor {
        width: 10px;
        height: 10px;
        background-color: var(--primary-color);
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transform: translate(-50%, -50%);
    }
    
    .static-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    }
    
    .static-pixel {
        position: absolute;
        width: 1px;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.5);
        opacity: 0;
        animation: static-flicker 0.5s infinite;
    }
    
    @keyframes static-flicker {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }
    
    .terminal.flicker {
        opacity: 0.8;
    }
    
    .project-card.active {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 255, 0, 0.3);
    }
    
    .active-glitch {
        animation: active-glitch 0.2s infinite;
    }
    
    @keyframes active-glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-5px, 5px); }
        40% { transform: translate(-5px, -5px); }
        60% { transform: translate(5px, 5px); }
        80% { transform: translate(5px, -5px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(style);
