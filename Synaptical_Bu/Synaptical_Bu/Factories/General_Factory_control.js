document.addEventListener('DOMContentLoaded', function () {
    const factoryLinks = document.querySelectorAll('.navbar-nav .nav-item');

    factoryLinks.forEach(link => {
        link.addEventListener('click', function () {
            factoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mantém a página atual de azul
    const currentUrl = window.location.href;
    factoryLinks.forEach(link => {
        const linkUrl = link.querySelector('.nav-link').href;
        if (currentUrl === linkUrl) {
            link.classList.add('active');
        }
    });
});

document.getElementById('editIcon').addEventListener('click', function() {
    var textBox = document.getElementById('text-box');
    textBox.style.display = textBox.style.display === 'none' ? 'block' : 'none';
});

//Link: https://chatgpt.com/share/afc57841-a2f0-43b6-95eb-2dcf63364540