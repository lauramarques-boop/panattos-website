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

// 3. ENVIO DE FORMULÁRIO PARA API
if (formContato) {
    formContato.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btnSubmit = formContato.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.innerHTML;

        // Mapeamento do Assunto (Enum)
        const assuntoSelect = document.getElementById('assunto');
        const assuntoMap = {
            "Quero ser cliente": 0,
            "Novos Produtos": 1,
            "Dúvidas sobre minha entrega": 2,
            "Dúvidas sobre comodatos": 3,
            "2ª via de Nota Fiscal": 4,
            "Defeitos em equipamentos": 5,
            "Reclamações": 6,
            "Sugestões e Elogios": 7,
            "Outros": 8
        };
        const assuntoValor = assuntoMap[assuntoSelect.value];

        // Dados do Formulário
        const dados = {
            assunto: assuntoValor,
            nomeCompleto: document.getElementById('nome').value,
            empresa: document.getElementById('empresa').value,
            cidade: document.getElementById('cidade').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value,
            mensagem: document.getElementById('mensagem').value
        };

        // Estado de Carregamento
        btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        btnSubmit.disabled = true;

        try {
            const response = await fetch('https://apiformulariopnt.azurewebsites.net/api/Formulario/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if (response.ok) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                formContato.reset();
            } else {
                const erro = await response.text();
                console.error('Erro na API:', erro);
                alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            alert('Erro de conexão. Verifique sua internet e tente novamente.');
        } finally {
            btnSubmit.innerHTML = textoOriginal;
            btnSubmit.disabled = false;
        }
    });
}