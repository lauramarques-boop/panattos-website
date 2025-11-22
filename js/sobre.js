/* =========================================
   LÓGICA: PÁGINA SOBRE A PANATTOS
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MENU MOBILE
    const btnMenuMobile = document.getElementById('btnMenuMobile');
    const menuMobile = document.getElementById('menuMobile');
    
    if (btnMenuMobile && menuMobile) {
        btnMenuMobile.addEventListener('click', () => {
            menuMobile.classList.toggle('ativo');
            const icone = btnMenuMobile.querySelector('i');
            
            // Alternar ícone (Hamburguer <-> X)
            if (menuMobile.classList.contains('ativo')) {
                icone.classList.remove('fa-bars');
                icone.classList.add('fa-xmark');
                document.body.style.overflow = 'hidden'; // Evita scroll fundo
            } else {
                icone.classList.remove('fa-xmark');
                icone.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
        
        // Fechar ao clicar em link
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuMobile.classList.remove('ativo');
                btnMenuMobile.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
                document.body.style.overflow = '';
            });
        });
    }

    // 2. ANIMAÇÃO SCROLL (TIMELINE)
    const observerOptions = {
        threshold: 0.15, // Ativa quando 15% do item aparecer
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
});