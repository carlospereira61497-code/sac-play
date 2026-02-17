document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Remove a tela preta (Loader) quando o site carrega
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 500);
    }

    // 2. Lógica do Formulário de Chamado
    const contactForm = document.getElementById('contact-form');
    const feedbackMsg = document.getElementById('form-feedback');
    const protocoloSpan = document.getElementById('protocolo-id');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            btn.innerText = "Enviando...";
            btn.disabled = true;

            setTimeout(() => {
                const protocolo = `#SAC2026${Math.floor(1000 + Math.random() * 9000)}`;
                protocoloSpan.innerText = protocolo;
                contactForm.classList.add('hidden');
                feedbackMsg.classList.remove('hidden');
            }, 1500);
        });
    }

    // 3. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });

    // 4. Botão Voltar ao Topo
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
});

// Função para resetar o formulário
function resetForm() {
    location.reload(); 
}