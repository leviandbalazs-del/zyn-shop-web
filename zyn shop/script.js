// Tab váltás funkció - MŰKÖDIK
function switchTab(tabId) {
    // Elrejti az összes tab-ot
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = 'none';
    });
    
    // Eltávolítja az active osztályt az összes gombról
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Megjeleníti a kiválasztott tab-ot
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
        selectedTab.classList.add('active');
    }
    
    // Aktívvá teszi a kiválasztott gombot
    const clickedButton = event.target;
    clickedButton.classList.add('active');
}

// Villámok generálása
function createLightning() {
    const container = document.getElementById('lightningContainer');
    
    for (let i = 0; i < 30; i++) {
        const lightning = document.createElement('div');
        lightning.classList.add('lightning');
        
        // Véletlenszerű pozíció
        const left = Math.random() * 100;
        const rotation = (Math.random() * 60) - 30;
        const delay = Math.random() * 10;
        const duration = 2 + Math.random() * 4;
        const height = 100 + Math.random() * 200;
        
        lightning.style.left = `${left}%`;
        lightning.style.transform = `rotate(${rotation}deg)`;
        lightning.style.animation = `lightningFlash ${duration}s infinite`;
        lightning.style.animationDelay = `${delay}s`;
        lightning.style.height = `${height}px`;
        
        container.appendChild(lightning);
    }
}

// Oldal betöltésekor
document.addEventListener('DOMContentLoaded', function() {
    // Villámok létrehozása
    createLightning();
    
    // Event listener hozzáadása minden tab gombhoz
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Alapértelmezett tab beállítása
    const defaultTab = document.getElementById('products');
    if (defaultTab) {
        defaultTab.style.display = 'block';
    }
    
    // Aktív gomb beállítása
    const defaultButton = document.querySelector('.tab-button[data-tab="products"]');
    if (defaultButton) {
        defaultButton.classList.add('active');
    }
});

// TikTok embed betöltése
function loadTikTokEmbed() {
    const embedCode = `
        <iframe 
            src="https://www.tiktok.com/embed" 
            width="325" 
            height="700" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    `;
    
    const placeholder = document.querySelector('.tiktok-placeholder');
    if (placeholder) {
        placeholder.innerHTML = embedCode;
    }
}

// Vásárlás gomb animáció
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'skew(-10deg) translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'skew(-10deg) translateY(0)';
    });
});