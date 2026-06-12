// --- 1. System Loader Config Layer (10 Seconds Display Lifecycle) ---
window.onload = function() {
    initHoverSounds(); // Initialize modern UI sound elements on dynamic elements
    
    setTimeout(function() {
        const loader = document.getElementById('loader');
        const mainContent = document.getElementById('main-content');
        
        loader.style.opacity = '0';
        
        setTimeout(function() {
            loader.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 50);
        }, 1000); 
    }, 10000); // Strict 10 Seconds Active Lifecycle
};

// --- 1B. Advanced Synthesized Web Audio Hover Engine ---
function playHoverSound() {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const audioCtx = new AudioContextClass();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(750, audioCtx.currentTime); // High-tech luxury blip
        gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime); // Subdued smooth volume
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);
        oscillator.stop(audioCtx.currentTime + 0.04);
    } catch (e) {
        // Quiet catch to bypass initial interaction security policies smoothly
    }
}

function initHoverSounds() {
    const targets = document.querySelectorAll('.nav-btn, .luxury-btn, .luxury-outline-btn, .luxury-card, .table-buy-btn, .table-resell-btn, .redeem-btn, .req-card');
    targets.forEach(el => {
        el.addEventListener('mouseenter', playHoverSound);
    });
}

// --- 2. Advanced View Navigation Switching Panel ---
function switchView(viewId, buttonElement) {
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(viewId).classList.add('active');
    buttonElement.classList.add('active');
    
    // Smooth window view reset trigger
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 3. Lively Mouse Reactive Free Fire Background Canvas Engine ---
const canvas = document.getElementById('ff-interactive-bg');
const ctx = canvas.getContext('2d');

let particlesArray = [];
let mouse = { x: null, y: null, radius: 150 };

// Auto structural window resize listener profiles
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Cursor Reactivity Tracker Coordinates
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Clear coordinates on viewport leave metrics
window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class EmberParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height + canvas.height;
        this.size = Math.random() * 3.5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = -(Math.random() * 1.8 + 0.6);
        this.alpha = Math.random() * 0.6 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Interactive mouse distance dynamic reactivity checks
        if (mouse.x != null && mouse.y != null) {
            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                // Smoothly accelerate away from active cursor location
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let force = (mouse.radius - distance) / mouse.radius;
                
                this.x += forceDirectionX * force * 5;
                this.y += forceDirectionY * force * 5;
            }
        }

        // Reset if element exits upper viewport boundary limits
        if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 20;
            this.speedY = -(Math.random() * 1.8 + 0.6);
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#d4af37';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = Math.random() > 0.5 ? '#d4af37' : '#ff5100'; // Gold & Fire Ember Palette Blend
        ctx.fill();
        ctx.restore();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < 75; i++) {
        particlesArray.push(new EmberParticle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// --- 4. Secure Core Token Arrays With Persistent LocalStorage (1 Key - 1 Time Only) ---
const validKeys = [
    "VHEX-A1B2-C3D4", "VHEX-E5F6-G7H8", "VHEX-I9J0-K1L2", "VHEX-M3N4-O5P6", "VHEX-Q7R8-S9T0",
    "VHEX-U1V2-W3X4", "VHEX-Y5Z6-A7B8", "VHEX-C9D0-E1F2", "VHEX-G3H4-I5J6", "VHEX-K7L8-M9N0",
    "VHEX-O1P2-Q3R4", "VHEX-S5T6-U7V8", "VHEX-W9X0-Y1Z2", "VHEX-A3B4-C5D6", "VHEX-E7F8-G9H0",
    "VHEX-I1J2-K3L4", "VHEX-M5N6-O7P8", "VHEX-Q9R0-S1T2", "VHEX-U3V4-W5X6", "VHEX-Y7Z8-A9B0",
    "VHEX-C1D2-E3F4", "VHEX-G5H6-I7J8", "VHEX-K9L0-M1N2", "VHEX-O3P4-Q5R6", "VHEX-S7T8-U9V0",
    "VHEX-W1X2-Y3Z4", "VHEX-A5B6-C7D8", "VHEX-E9F0-G1H2", "VHEX-I3J4-K5L6", "VHEX-M7N8-O9P0",
    "VHEX-Q1R2-S3T4", "VHEX-U5V6-W7X8", "VHEX-Y9Z0-A1B2", "VHEX-C3D4-E5F6", "VHEX-G7H8-I9J0",
    "VHEX-K1L2-M3N4", "VHEX-O5P6-Q7R8", "VHEX-S9T0-U1V2", "VHEX-W3X4-Y5Z6", "VHEX-A7B8-C9D0",
    "VHEX-E1F2-G3H4", "VHEX-I5J6-K7L8", "VHEX-M9N0-O1P2", "VHEX-Q3R4-S5T6", "VHEX-U7V8-W9X0",
    "VHEX-Y1Z2-A3B4", "VHEX-C5D6-E7F8", "VHEX-G9H0-I1J2", "VHEX-K3L4-M5N6", "VHEX-O7P8-Q9R0"
];

function redeemKey(panelId, inputId, downloadLink) {
    const inputField = document.getElementById(inputId);
    const keyInput = inputField.value.trim();
    const msgBox = document.getElementById('msg-' + panelId);

    if (keyInput === "") {
        msgBox.innerHTML = "Access Denied: Code block empty!";
        msgBox.className = "msg error";
        return;
    }

    // Pull used keys array database block data from LocalStorage setup
    let usedKeys = JSON.parse(localStorage.getItem('vhex_used_keys_db')) || [];

    // 1. Strict Check: If the key sequence exists inside the persistent local storage block data
    if (usedKeys.includes(keyInput)) {
        msgBox.innerHTML = "This key has already been used and expired permanently!";
        msgBox.className = "msg error";
        return;
    }

    // 2. Secondary Check: Verify validity inside the runtime sequence block arrays data
    const keyIndex = validKeys.indexOf(keyInput);

    if (keyIndex > -1) {
        msgBox.innerHTML = "Success! Initializing download routing setup.";
        msgBox.className = "msg success";
        
        // Push current matching key inside used keys storage to expire it for good
        usedKeys.push(keyInput);
        localStorage.setItem('vhex_used_keys_db', JSON.stringify(usedKeys));
        
        // Execute secure archive routing redirect
        window.open(downloadLink, '_blank');
        inputField.value = "";
    } else {
        msgBox.innerHTML = "Error: Key sequence invalid or absolute code block corrupted.";
        msgBox.className = "msg error";
    }
}