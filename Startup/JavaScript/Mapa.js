// Inicialização do mapa Leaflet
document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([-23.5635, -46.6543], 15); // Coordenadas da Av. Paulista
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Adiciona um marcador
    L.marker([-23.5635, -46.6543]).addTo(map)
        .bindPopup('Clinic+<br>Av. Paulista, 1000')
        .openPopup();
});

// Atualiza o ano automaticamente
document.getElementById('current-year').textContent = new Date().getFullYear();

// Menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Validação básica do formulário com redirecionamento após alert
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    const telefone = document.getElementById('telefone');
    
    if (telefone.value && !/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone.value)) {
        alert('Por favor, insira um telefone no formato (11) 99999-9999');
        e.preventDefault(); // Impede envio do formulário se o telefone for inválido
    } else {
        alert("Seu contato foi arquivado e será lido 😁");
        // Redireciona depois do usuário clicar em OK no alert
        window.location.href = '../Home/Inicio.html';
    }
});
