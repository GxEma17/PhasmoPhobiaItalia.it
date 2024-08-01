// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Funzione per lo scroll animato
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }

        // Aggiungi la classe 'active' al link cliccato e rimuovila dagli altri
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    }

    // Aggiungi l'evento di scroll animato a ciascun link di navigazione
    navLinks.forEach(link => link.addEventListener('click', scrollToSection));

    // Mostra/Nasconde il pulsante di scroll in base alla posizione di scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Aggiungi il comportamento al clic sul pulsante di scroll
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
