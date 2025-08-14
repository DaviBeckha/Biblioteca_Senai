
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle?.querySelector('i');
    
    if (!darkModeToggle || !icon) return;

    
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
});