const btnMenuMobile = document.getElementById('btnMenuMobile');
const menuMobile = document.getElementById('menuMobile');
const btnTopo = document.getElementById('btnTopo');
const formContato = document.getElementById('formContato');
const header = document.getElementById('cabecalhoPrincipal');

// 1. MENU MOBILE INI
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
// 1. MENU MOBILE FIN


// 2. EFEITO DE SCROLL NO CABEÇALHO E BOTÃO TOPO INI
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
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
// 2. EFEITO DE SCROLL NO CABEÇALHO E BOTÃO TOPO FIN


// 3. CARROSSEL DA SEÇÃO INICIO INI
function iniciarCarrossel() {
    const imagens = document.querySelectorAll('.carrossel-img');
    const indicadores = document.querySelectorAll('.indicador');
    
    if (imagens.length === 0) return;

    let indexAtual = 0;

    function mostrarSlide(index) {
        imagens.forEach(img => img.classList.remove('active'));
        indicadores.forEach(ind => ind.classList.remove('active'));

        imagens[index].classList.add('active');
        indicadores[index].classList.add('active');
        indexAtual = index;
    }

    function proximoSlide() {
        let proximo = (indexAtual + 1) % imagens.length;
        mostrarSlide(proximo);
    }

    setInterval(proximoSlide, 4000);

    indicadores.forEach((ind, i) => {
        ind.addEventListener('click', () => mostrarSlide(i));
    });
}
// 3. CARROSSEL DA SEÇÃO INICIO FIN


// 4. SIMULAÇÃO DE ENVIO DE FORMULÁRIO INI
if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btnSubmit = formContato.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.innerHTML;

        btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        btnSubmit.disabled = true;

        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve. Verifique seu cliente de email (Outlook/Gmail) para a confirmação de envio.');
            formContato.reset();
            btnSubmit.innerHTML = textoOriginal;
            btnSubmit.disabled = false;
        }, 2000);
    });
}
// 4. SIMULAÇÃO DE ENVIO DE FORMULÁRIO FIN

// 5. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    iniciarCarrossel();
    console.log('Sistema Panattos Carregado com Sucesso!');
});