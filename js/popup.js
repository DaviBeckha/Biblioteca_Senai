function openPopup(id) {
    document.getElementById(id).classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closePopup(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = 'auto'; 
}


document.querySelectorAll('.popup-overlay').forEach(popup => {
    popup.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});