
document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('isAuthenticated')) {
        window.location.href = 'index.html';
    }

 
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle?.querySelector('i');
    
    if (darkModeToggle && icon) {
        
        const savedMode = localStorage.getItem('darkMode');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedMode === 'dark' || (!savedMode && systemPrefersDark)) {
            document.body.classList.add('dark-mode');
            icon.classList.replace('bi-moon-stars', 'bi-sun');
        }
        
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.replace('bi-moon-stars', 'bi-sun');
                localStorage.setItem('darkMode', 'dark');
            } else {
                icon.classList.replace('bi-sun', 'bi-moon-stars');
                localStorage.setItem('darkMode', 'light');
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('email');
            if (!emailInput.checkValidity()) {
                emailInput.classList.add('is-invalid');
                return;
            }
            
            localStorage.setItem('isAuthenticated', 'true');
            window.location.href = 'index.html';
        });
    }
});