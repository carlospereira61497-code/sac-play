document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Loading Animation
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    });

    // 2. Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeIcon.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
        lucide.createIcons(); // Atualiza o ícone
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

    // Persistência do tema
    if (localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.setAttribute('data-lucide', 'sun');
    }

    // 3. Scroll Suave & Header Dinâmico
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = 'none';
        }

        // Botão Voltar ao Topo
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY > 500) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. Formulário de Chamado (Simulação)
    const contactForm = document.getElementById('contact-form');
    const feedbackMsg = document.getElementById('form-feedback');
    const protocoloSpan = document.getElementById('protocolo-id');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulação de carregamento no botão
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = "Processando...";
        btn.disabled = true;

        setTimeout(() => {
            // Gera protocolo: SAC + Ano + Numero Aleatório
            const protocolo = `SAC${new Date().getFullYear()}${Math.floor(1000 + Math.random() * 9000)}`;
            
            protocoloSpan.innerText = protocolo;
            contactForm.classList.add('hidden');
            feedbackMsg.classList.remove('hidden');
            
            // Aqui seria o ponto de chamada para uma API (fetch)
            console.log("Dados prontos para API:", {
                nome: document.getElementById('nome').value,
                setor: document.getElementById('setor').value,
                protocolo: protocolo
            });

            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });

    // 5. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Fecha todos antes de abrir o novo
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Função para resetar formulário (chamada via HTML)
function resetForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    form.reset();
    form.classList.remove('hidden');
    feedback.classList.add('hidden');
}