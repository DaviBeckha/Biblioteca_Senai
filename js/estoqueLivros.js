document.addEventListener('DOMContentLoaded', function() {
    // livros cadastrados
    const books = [
        { 
            id: 1, 
            title: "Dom Casmurro", 
            author: "Machado de Assis", 
            genre: "Romance",
            description: "Dom Casmurro é um romance escrito por Machado de Assis, publicado em 1899. A obra é narrada em primeira pessoa por Bento Santiago, que conta sua vida desde a adolescência até a idade adulta, focando principalmente em seu relacionamento com Capitu e a possível traição dela.",
            cover: "https://m.media-amazon.com/images/I/81R3Kx2R1BL._AC_UF1000,1000_QL80_.jpg"
        },
        { 
            id: 2, 
            title: "O Cortiço", 
            author: "Aluísio Azevedo", 
            genre: "Naturalismo",
            description: "O Cortiço é um romance naturalista do brasileiro Aluísio Azevedo publicado em 1890. A obra denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou cortiços cariocas do final do século XIX.",
            cover: "https://m.media-amazon.com/images/I/71X1p+mVv8L._AC_UF1000,1000_QL80_.jpg"
        },
        { id: 3, title: "Iracema", author: "José de Alencar", genre: "Romance" },
        { id: 4, title: "Memórias Póstumas", author: "Machado de Assis", genre: "Romance" },
        { id: 5, title: "Vidas Secas", author: "Graciliano Ramos", genre: "Modernismo" },
        { id: 6, title: "Capitães da Areia", author: "Jorge Amado", genre: "Modernismo" },
        { id: 7, title: "O Alienista", author: "Machado de Assis", genre: "Conto" },
        { id: 8, title: "A Hora da Estrela", author: "Clarice Lispector", genre: "Modernismo" },
        { id: 9, title: "Grande Sertão: Veredas", author: "Guimarães Rosa", genre: "Modernismo" },
        { id: 10, title: "Macunaíma", author: "Mário de Andrade", genre: "Modernismo" },
        { id: 11, title: "O Guarani", author: "José de Alencar", genre: "Romance" },
        { id: 12, title: "Quincas Borba", author: "Machado de Assis", genre: "Romance" },
        { id: 13, title: "Memórias de um Sargento de Milícias", author: "Manuel Antônio de Almeida", genre: "Romance" },
        { id: 14, title: "O Triste Fim de Policarpo Quaresma", author: "Lima Barreto", genre: "Pré-Modernismo" },
        { id: 15, title: "Claro Enigma", author: "Carlos Drummond de Andrade", genre: "Poesia" },
        { id: 16, title: "A Rosa do Povo", author: "Carlos Drummond de Andrade", genre: "Poesia" },
        { id: 17, title: "Mayombe", author: "Pepetela", genre: "Romance" },
        { id: 18, title: "O Pagador de Promessas", author: "Dias Gomes", genre: "Teatro" },
        { id: 19, title: "A Moreninha", author: "Joaquim Manuel de Macedo", genre: "Romance" },
        { id: 20, title: "O Ateneu", author: "Raul Pompéia", genre: "Romance" },
        { id: 21, title: "Lucíola", author: "José de Alencar", genre: "Romance" },
        { id: 22, title: "Senhora", author: "José de Alencar", genre: "Romance" },
        { id: 23, title: "O Mulato", author: "Aluísio Azevedo", genre: "Naturalismo" },
        { id: 24, title: "A Cidade e as Serras", author: "Eça de Queirós", genre: "Romance" },
        { id: 25, title: "O Quinze", author: "Rachel de Queiroz", genre: "Modernismo" },
        { id: 26, title: "Dona Flor e Seus Dois Maridos", author: "Jorge Amado", genre: "Modernismo" },
        { id: 27, title: "Tenda dos Milagres", author: "Jorge Amado", genre: "Modernismo" },
        { id: 28, title: "A Paixão Segundo G.H.", author: "Clarice Lispector", genre: "Modernismo" },
        { id: 29, title: "Laços de Família", author: "Clarice Lispector", genre: "Conto" },
        { id: 30, title: "Sagarana", author: "Guimarães Rosa", genre: "Conto" }
    ];

    const booksContainer = document.getElementById('booksContainer');
    const shelfContainer = document.getElementById('shelfContainer');
    const totalBooksElement = document.getElementById('totalBooks');
    const searchInput = document.getElementById('searchInput');
    
    let shelf = JSON.parse(localStorage.getItem('shelf')) || [];
    let currentFilter = 'all';
    
    
    function init() {
        renderBooks();
        setupFilterButtons();
        setupSearch();
    }
    
    
    function renderBooks() {
        renderFilteredBooks(books);
        renderShelf();
    }
    
   
    function setupFilterButtons() {
        document.querySelectorAll('.filter-option').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                currentFilter = this.getAttribute('data-filter');
                applyFilters();
            });
        });
    }
    
    
    function setupSearch() {
        searchInput.addEventListener('input', function() {
            applyFilters();
        });
    }
    
   
    function applyFilters() {
        let filteredBooks = books;
        
        
        if (currentFilter !== 'all') {
            filteredBooks = filteredBooks.filter(book => book.genre === currentFilter);
        }
        
        
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredBooks = filteredBooks.filter(book => 
                book.title.toLowerCase().includes(searchTerm) || 
                book.author.toLowerCase().includes(searchTerm)
            );
        }
        
        renderFilteredBooks(filteredBooks);
    }
    
   
    function renderFilteredBooks(filteredBooks) {
    booksContainer.innerHTML = '';
    
    if (filteredBooks.length === 0) {
        booksContainer.innerHTML = '<p class="text-center col-12">Nenhum livro encontrado</p>';
        return;
    }
    
    filteredBooks.forEach(book => {
        const isInShelf = shelf.some(item => item.id === book.id);
        
        const bookElement = document.createElement('div');
        bookElement.className = 'col-md-3 mb-4';
        bookElement.innerHTML = `
            <div class="card bg-light-gold border-gold h-100" onclick="openBookPopup(${book.id})" style="cursor: pointer;">
                <div class="card-body">
                    <h5 class="card-title text-bordo">${book.title}</h5>
                    <p class="card-text">${book.author}</p>
                    <small class="text-muted">${book.genre}</small>
                </div>
                <div class="card-footer bg-transparent border-gold">
                    <button class="btn btn-sm ${isInShelf ? 'btn-outline-danger' : 'btn-outline-gold'}" 
                            onclick="event.stopPropagation(); toggleShelf(${book.id})">
                        ${isInShelf ? 'Remover' : 'Adicionar'}
                    </button>
                </div>
            </div>
        `;
        booksContainer.appendChild(bookElement);
    });
}
    
   
    function renderShelf() {
        shelfContainer.innerHTML = '';
        totalBooksElement.textContent = shelf.length;
        
        if (shelf.length === 0) {
            shelfContainer.innerHTML = '<p class="text-center col-12">Sua estante está vazia</p>';
            return;
        }
        
        shelf.forEach(book => {
            const bookData = books.find(b => b.id === book.id);
            if (!bookData) return;
            
            const bookElement = document.createElement('div');
            bookElement.className = 'col-md-3 mb-4';
            bookElement.innerHTML = `
                <div class="card bg-light-gold border-gold h-100">
                    <div class="card-body">
                        <h5 class="card-title text-bordo">${bookData.title}</h5>
                        <p class="card-text">${bookData.author}</p>
                        <small class="text-muted">${bookData.genre}</small>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" ${book.read ? 'checked' : ''} 
                                   id="read-${book.id}" onchange="toggleReadStatus(${book.id})">
                            <label class="form-check-label" for="read-${book.id}">
                                Lido
                            </label>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-gold">
                        <button class="btn btn-sm btn-outline-danger" onclick="removeFromShelf(${book.id})">
                            Remover
                        </button>
                    </div>
                </div>
            `;
            shelfContainer.appendChild(bookElement);
        });
    }
    
    
    window.toggleShelf = function(bookId) {
        const index = shelf.findIndex(item => item.id === bookId);
        
        if (index === -1) {
            shelf.push({ id: bookId, read: false });
        } else {
            shelf.splice(index, 1);
        }
        
        localStorage.setItem('shelf', JSON.stringify(shelf));
        applyFilters();
        renderShelf();
    };
    
    window.removeFromShelf = function(bookId) {
        shelf = shelf.filter(item => item.id !== bookId);
        localStorage.setItem('shelf', JSON.stringify(shelf));
        applyFilters();
        renderShelf();
    };
    
    window.toggleReadStatus = function(bookId) {
        const book = shelf.find(item => item.id === bookId);
        if (book) {
            book.read = !book.read;
            localStorage.setItem('shelf', JSON.stringify(shelf));
            renderShelf();
        }
    };
     window.openBookPopup = function(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    
    closeBookPopup();
    
    const popupHTML = `
        <div class="book-popup-overlay" id="bookPopup">
            <div class="book-popup-content">
                <span class="book-popup-close" onclick="closeBookPopup()">&times;</span>
                <div class="row">
                    <div class="col-md-4">
                        <img src="${book.cover || 'https://via.placeholder.com/200x300?text=Capa+Indispon%C3%ADvel'}" 
                             alt="Capa do livro ${book.title}" class="book-popup-img">
                    </div>
                    <div class="col-md-8">
                        <h3 class="text-bordo">${book.title}</h3>
                        <h5 class="autorClaro">${book.author}</h5>
                        <p><small class="text-muted">${book.genre}</small></p>
                        <p class="mt-3">${book.description || 'Descrição não disponível.'}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    
    
    void document.getElementById('bookPopup').offsetWidth;
    
  
    document.getElementById('bookPopup').classList.add('active');
    document.body.style.overflow = 'hidden';
};

    window.closeBookPopup = function() {
    const popup = document.getElementById('bookPopup');
    if (popup) {
        popup.classList.remove('active');
        
       
        setTimeout(() => {
            if (popup.parentNode) {
                popup.remove();
            }
            document.body.style.overflow = 'auto';
        }, 300);
    }
};

    
    document.addEventListener('click', function(e) {
        const popup = document.getElementById('bookPopup');
        if (popup && e.target === popup) {
            closeBookPopup();
        }
    });
    init();
});