document.addEventListener('DOMContentLoaded', function() {
    // Criar elemento de transição principal
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    
    // Aplicar modo escuro imediatamente se necessário
    if (document.body.classList.contains('dark-mode')) {
        transition.classList.add('dark-mode');
        transition.style.backgroundColor = '#1a1a1a';
    } else {
        transition.style.backgroundColor = '#f8f4e3';
    }
    
    document.body.appendChild(transition);

    // Função para criar transição segura
    function createSafeTransition() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        // Criar overlay com estilo inline para evitar atrasos de CSS
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9998;
            background-color: ${isDarkMode ? '#1a1a1a' : '#f8f4e3'} !important;
            animation: pageOut 0.8s ease forwards;
        `;
        overlay.className = isDarkMode ? 'transition-out dark-mode' : 'transition-out';
        
        return overlay;
    }

    // Aplicar transições aos links
    document.querySelectorAll('a.transition-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && !this.href.startsWith('javascript:') && 
                !this.hash && this.target !== '_blank') {
                
                e.preventDefault();
                
                // Criar overlay seguro
                const overlay = createSafeTransition();
                document.body.appendChild(overlay);
                
                // Aplicar estilo seguro na transição principal
                const isDarkMode = document.body.classList.contains('dark-mode');
                if (isDarkMode) {
                    transition.classList.add('dark-mode');
                    transition.style.backgroundColor = '#1a1a1a';
                } else {
                    transition.classList.remove('dark-mode');
                    transition.style.backgroundColor = '#f8f4e3';
                }
                
                setTimeout(() => {
                    transition.classList.add('active');
                }, 200);
                
                setTimeout(() => {
                    window.location.href = this.href;
                }, 800);
            }
        });
    });

    // Limpar transições no carregamento
    window.addEventListener('load', function() {
        const transition = document.querySelector('.page-transition');
        const overlay = document.querySelector('.transition-out');
        
        if (transition) {
            transition.classList.remove('active');
            // Garantir que a cor correta seja aplicada após o carregamento
            if (document.body.classList.contains('dark-mode')) {
                transition.style.backgroundColor = '#1a1a1a';
            } else {
                transition.style.backgroundColor = '#f8f4e3';
            }
        }
        if (overlay) overlay.remove();
    });

    // Observar mudanças no modo escuro para atualizar a transição
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const isDarkMode = document.body.classList.contains('dark-mode');
                const transition = document.querySelector('.page-transition');
                
                if (transition) {
                    if (isDarkMode) {
                        transition.classList.add('dark-mode');
                        transition.style.backgroundColor = '#1a1a1a';
                    } else {
                        transition.classList.remove('dark-mode');
                        transition.style.backgroundColor = '#f8f4e3';
                    }
                }
            }
        });
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});