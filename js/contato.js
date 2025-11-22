/* =========================================
   LÓGICA: PÁGINA DE CONTATO
   ========================================= */

const btnMenuMobile = document.getElementById('btnMenuMobile');
const menuMobile = document.getElementById('menuMobile');
const formContato = document.getElementById('formContato');
const btnTopo = document.getElementById('btnTopo');
const header = document.getElementById('cabecalhoPrincipal');

// 1. MENU MOBILE
function alternarMenu() {
    menuMobile.classList.toggle('ativo');
    const icone = btnMenuMobile.querySelector('i');
    
    if (menuMobile.classList.contains('ativo')) {
        icone.className = 'fa-solid fa-xmark';
    } else {
        icone.className = 'fa-solid fa-bars';
    }
}

function fecharMenu() {
    menuMobile.classList.remove('ativo');
    const icone = btnMenuMobile.querySelector('i');
    icone.className = 'fa-solid fa-bars';
}

if (btnMenuMobile) btnMenuMobile.addEventListener('click', alternarMenu);

document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', fecharMenu);
});

// 2. SCROLL E HEADER (Igual Inicio.js)
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (header) {
        if (scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "none";
        }
    }

    if (btnTopo) {
        if (scrollY > 300) {
            btnTopo.classList.add('visivel');
        } else {
            btnTopo.classList.remove('visivel');
        }
    }
});

if (btnTopo) {
    btnTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 3. SIMULAÇÃO DE ENVIO DE FORMULÁRIO
if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btnSubmit = formContato.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.innerHTML;

        // Simula estado de carregamento
        btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        btnSubmit.disabled = true;

        // Simula tempo de envio (2 segundos)
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            // Reseta formulário e botão
            formContato.reset();
            btnSubmit.innerHTML = textoOriginal;
            btnSubmit.disabled = false;
        }, 2000);
    });
}