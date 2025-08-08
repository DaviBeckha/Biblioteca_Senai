document.addEventListener('DOMContentLoaded', function() {
    // Dados dos livros
    const books = [
        { id: 1, title: "Dom Casmurro", author: "Machado de Assis", genre: "Romance" },
        { id: 2, title: "O Cortiço", author: "Aluísio Azevedo", genre: "Naturalismo" },
        { id: 3, title: "Iracema", author: "José de Alencar", genre: "Romance" },
        { id: 4, title: "Memórias Póstumas", author: "Machado de Assis", genre: "Romance" },
        { id: 5, title: "Vidas Secas", author: "Graciliano Ramos", genre: "Modernismo" },
        { id: 6, title: "Capitães da Areia", author: "Jorge Amado", genre: "Modernismo" },
        { id: 7, title: "O Alienista", author: "Machado de Assis", genre: "Conto" },
        { id: 8, title: "A Hora da Estrela", author: "Clarice Lispector", genre: "Modernismo" },
        { id: 9, title: "Grande Sertão: Veredas", author: "Guimarães Rosa", genre: "Modernismo" },
        { id: 10, title: "Macunaíma", author: "Mário de Andrade", genre: "Modernismo" },
        { id: 11, title: "O Guarani", author: "José de Alencar", genre: "Romance" },
        { id: 12, title: "Quincas Borba", author: "Machado de Assis", genre: "Romance" }
    ];

    const booksContainer = document.getElementById('booksContainer');
    const shelfContainer = document.getElementById('shelfContainer');
    const totalBooksElement = document.getElementById('totalBooks');
    const searchInput = document.getElementById('searchInput');
    
    
    let shelf = JSON.parse(localStorage.getItem('shelf')) || [];
    
    
    function renderBooks() {
        booksContainer.innerHTML = '';
        books.forEach(book => {
            const isInShelf = shelf.some(item => item.id === book.id);
            
            const bookElement = document.createElement('div');
            bookElement.className = 'col-md-3 mb-4';
            bookElement.innerHTML = `
                <div class="card bg-light-gold border-gold h-100">
                    <div class="card-body">
                        <h5 class="card-title text-bordo">${book.title}</h5>
                        <p class="card-text">${book.author}</p>
                        <small class="text-muted">${book.genre}</small>
                    </div>
                    <div class="card-footer bg-transparent border-gold">
                        <button class="btn btn-sm ${isInShelf ? 'btn-outline-danger' : 'btn-outline-gold'}" 
                                onclick="toggleShelf(${book.id})">
                            ${isInShelf ? 'Remover' : 'Adicionar'}
                        </button>
                    </div>
                </div>
            `;
            booksContainer.appendChild(bookElement);
        });
        
        renderShelf();
    }
    
    
    function renderShelf() {
        shelfContainer.innerHTML = '';
        totalBooksElement.textContent = shelf.length;
        
        if (shelf.length === 0) {
            shelfContainer.innerHTML = '<p class="text-center">Sua estante está vazia</p>';
            return;
        }
        
        shelf.forEach(book => {
            const bookData = books.find(b => b.id === book.id);
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
        renderBooks();
    };
    
    window.removeFromShelf = function(bookId) {
        shelf = shelf.filter(item => item.id !== bookId);
        localStorage.setItem('shelf', JSON.stringify(shelf));
        renderBooks();
    };
    
    window.toggleReadStatus = function(bookId) {
        const book = shelf.find(item => item.id === bookId);
        if (book) {
            book.read = !book.read;
            localStorage.setItem('shelf', JSON.stringify(shelf));
            renderShelf();
        }
    };
    
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm)
        );
        
        booksContainer.innerHTML = '';
        filteredBooks.forEach(book => {
            const isInShelf = shelf.some(item => item.id === book.id);
            
            const bookElement = document.createElement('div');
            bookElement.className = 'col-md-3 mb-4';
            bookElement.innerHTML = `
                <div class="card bg-light-gold border-gold h-100">
                    <div class="card-body">
                        <h5 class="card-title text-bordo">${book.title}</h5>
                        <p class="card-text text-white">${book.author}</p>
                        <small class="text-muted">${book.genre}</small>
                    </div>
                    <div class="card-footer bg-transparent border-gold">
                        <button class="btn btn-sm ${isInShelf ? 'btn-outline-danger' : 'btn-outline-gold'}" 
                                onclick="toggleShelf(${book.id})">
                            ${isInShelf ? 'Remover' : 'Adicionar'}
                        </button>
                    </div>
                </div>
            `;
            booksContainer.appendChild(bookElement);
        });
    });
    
    
    renderBooks();
});