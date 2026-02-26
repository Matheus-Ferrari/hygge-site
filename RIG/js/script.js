// RIG E-commerce - script.js
// Script para header dinâmico ao rolar a página

document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('main-header');
    function onScroll() {
        if (window.scrollY > 20) {
            header.classList.add('solid');
        } else {
            header.classList.remove('solid');
        }
    }
    window.addEventListener('scroll', onScroll);
    onScroll(); // Executa ao carregar
});
