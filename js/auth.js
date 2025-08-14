document.addEventListener('DOMContentLoaded', function() {
    
    if (!localStorage.getItem('isAuthenticated')) {
        window.location.href = 'login.html';
    }

  
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('isAuthenticated');
            window.location.href = 'login.html';
        });
    }
});