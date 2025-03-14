const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Toggle menu visibility on hamburger click
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Fechar o menu após clicar em um item, quando estiver no mobile
const menuItems = document.querySelectorAll('.menu li a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menu.classList.remove('show');
        }
    });
});

// Adicionar rolagem suave aos links de menu
const menuLinks = document.querySelectorAll('a[href^="#"]');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Função para copiar o PIX
function copyPix() {
    const copyText = document.querySelector('.pix-info p').textContent.split(": ")[1];
    navigator.clipboard.writeText(copyText).then(() => {
        const message = document.getElementById('copy-message');
        message.style.display = 'block';
        setTimeout(() => message.style.display = 'none', 2000);
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}

// Fechar o menu quando a tela for redimensionada e maior que 768px
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('show'); // Remove a classe show quando a tela for maior que 768px
    }
});
