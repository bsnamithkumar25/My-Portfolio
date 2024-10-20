document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            sections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('visible');
            });

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('visible');
            } else {
                console.error('Target section not found:', this.getAttribute('href'));
            }
        });
    });
    sections[0].classList.remove('hidden');
    sections[0].classList.add('visible');
});
