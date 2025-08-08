document.addEventListener('DOMContentLoaded', function() {
    // Criar elemento de transição principal
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    
    
    if (document.body.classList.contains('dark-mode')) {
        transition.classList.add('dark-mode');
        transition.style.backgroundColor = '#1a1a1a';
    } else {
        transition.style.backgroundColor = '#f8f4e3';
    }
    
    document.body.appendChild(transition);

    
    function createSafeTransition() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        
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

    
    document.querySelectorAll('a.transition-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && !this.href.startsWith('javascript:') && 
                !this.hash && this.target !== '_blank') {
                
                e.preventDefault();
                
                
                const overlay = createSafeTransition();
                document.body.appendChild(overlay);
                
                
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

    
    window.addEventListener('load', function() {
        const transition = document.querySelector('.page-transition');
        const overlay = document.querySelector('.transition-out');
        
        if (transition) {
            transition.classList.remove('active');
            
            if (document.body.classList.contains('dark-mode')) {
                transition.style.backgroundColor = '#1a1a1a';
            } else {
                transition.style.backgroundColor = '#f8f4e3';
            }
        }
        if (overlay) overlay.remove();
    });

    
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