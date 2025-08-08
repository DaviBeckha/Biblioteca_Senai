document.addEventListener('DOMContentLoaded', function() {
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);

    document.querySelectorAll('a.transition-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && !this.href.startsWith('javascript:') && 
                !this.hash && this.target !== '_blank') {
                
                e.preventDefault();
                
                
                document.body.classList.add('transition-out');
                
                
                setTimeout(() => {
                    transition.classList.add('active');
                }, 200);
                
                
                setTimeout(() => {
                    window.location.href = this.href;
                }, 600);
            }
        });
    });

   
    window.addEventListener('load', function() {
        transition.classList.remove('active');
        document.body.classList.remove('transition-out');
    });
});