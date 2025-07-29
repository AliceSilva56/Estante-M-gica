// Sample data
let books = [
  {
    id: 1,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    status: "read",
    pages: 96,
    notes: "Uma obra-prima atemporal sobre amizade e humanidade.",
    dateAdded: new Date('2024-01-15')
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    status: "reading",
    pages: 328,
    notes: "Distopia fascinante e assustadora sobre controle social.",
    dateAdded: new Date('2024-01-20')
  },
  {
    id: 3,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    status: "wishlist",
    pages: 208,
    notes: "Clássico brasileiro que preciso ler.",
    dateAdded: new Date('2024-01-25')
  },
  {
    id: 4,
    title: "Meu Romance Secreto",
    author: "Eu mesmo",
    status: "writing",
    pages: 150,
    notes: "História sobre uma jornada de autodescoberta.",
    dateAdded: new Date('2024-02-01')
  },
  {
    id: 5,
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    status: "read",
    pages: 432,
    notes: "Realismo mágico extraordinário.",
    dateAdded: new Date('2024-01-10')
  },
  {
    id: 6,
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    status: "reading",
    pages: 310,
    notes: "Aventura épica na Terra Média.",
    dateAdded: new Date('2024-02-05')
  }
];

// DOM elements
const navItems = document.querySelectorAll('.nav-item');
const screens = document.querySelectorAll('.screen');
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');
const closeModal = document.getElementById('closeModal');
const addBookForm = document.getElementById('addBookForm');
const searchInput = document.getElementById('searchInput');
const filterTabs = document.querySelectorAll('.filter-tab');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  updateStats();
  renderRecentBooks();
  renderLibraryBooks();
  setupEventListeners();
});

// Navigation
function setupEventListeners() {
  // Bottom navigation
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const screenName = item.dataset.screen;
      switchScreen(screenName);
      
      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Modal controls
  addBookBtn.addEventListener('click', () => {
    addBookModal.classList.add('active');
  });

  closeModal.addEventListener('click', () => {
    addBookModal.classList.remove('active');
  });

  addBookModal.addEventListener('click', (e) => {
    if (e.target === addBookModal) {
      addBookModal.classList.remove('active');
    }
  });

  // Form submission
  addBookForm.addEventListener('submit', handleAddBook);

  // Search functionality
  searchInput.addEventListener('input', handleSearch);

  // Filter tabs
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const filter = tab.dataset.filter;
      renderLibraryBooks(filter);
    });
  });
}

function switchScreen(screenName) {
  screens.forEach(screen => {
    screen.classList.remove('active');
  });
  
  const targetScreen = document.getElementById(screenName + 'Screen');
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

// Stats calculation
function updateStats() {
  const stats = {
    reading: books.filter(book => book.status === 'reading').length,
    read: books.filter(book => book.status === 'read').length,
    wishlist: books.filter(book => book.status === 'wishlist').length,
    writing: books.filter(book => book.status === 'writing').length
  };

  document.getElementById('readingCount').textContent = stats.reading;
  document.getElementById('readCount').textContent = stats.read;
  document.getElementById('wishlistCount').textContent = stats.wishlist;
  document.getElementById('writingCount').textContent = stats.writing;
}

// Render recent books
function renderRecentBooks() {
  const recentBooksContainer = document.getElementById('recentBooks');
  const recentBooks = books
    .sort((a, b) => b.dateAdded - a.dateAdded)
    .slice(0, 3);

  recentBooksContainer.innerHTML = recentBooks.map(book => createBookHTML(book)).join('');
}

// Render library books
function renderLibraryBooks(filter = 'all') {
  const booksGrid = document.getElementById('booksGrid');
  let filteredBooks = books;

  if (filter !== 'all') {
    filteredBooks = books.filter(book => book.status === filter);
  }

  if (filteredBooks.length === 0) {
    booksGrid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-book"></i>
        <p>Nenhum livro encontrado</p>
      </div>
    `;
    return;
  }

  booksGrid.innerHTML = filteredBooks.map(book => createBookHTML(book)).join('');
}

// Create book HTML
function createBookHTML(book) {
  const statusLabels = {
    reading: 'Lendo',
    read: 'Lido',
    wishlist: 'Quero Ler',
    writing: 'Escrevendo'
  };

  return `
    <div class="book-item">
      <div class="book-header">
        <div class="book-title">${book.title}</div>
        <span class="book-status status-${book.status}">${statusLabels[book.status]}</span>
      </div>
      <div class="book-author">${book.author}</div>
      <div class="book-meta">
        <span>${book.pages} páginas</span>
        <span>${formatDate(book.dateAdded)}</span>
      </div>
      ${book.notes ? `<div class="book-notes" style="margin-top: 8px; font-size: 14px; color: #666; font-style: italic;">"${book.notes}"</div>` : ''}
    </div>
  `;
}

// Handle add book form
function handleAddBook(e) {
  e.preventDefault();
  
  const formData = new FormData(addBookForm);
  const newBook = {
    id: Date.now(),
    title: formData.get('title'),
    author: formData.get('author'),
    status: formData.get('status'),
    pages: parseInt(formData.get('pages')) || 0,
    notes: formData.get('notes'),
    dateAdded: new Date()
  };

  books.unshift(newBook);
  
  // Update UI
  updateStats();
  renderRecentBooks();
  renderLibraryBooks();
  
  // Close modal and reset form
  addBookModal.classList.remove('active');
  addBookForm.reset();
  
  // Show success feedback
  showToast('Livro adicionado com sucesso! ✨');
}

// Handle search
function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  const searchResults = document.getElementById('searchResults');
  
  if (!query) {
    searchResults.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <p>Digite para buscar em sua biblioteca</p>
      </div>
    `;
    return;
  }

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query) ||
    book.notes.toLowerCase().includes(query)
  );

  if (filteredBooks.length === 0) {
    searchResults.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <p>Nenhum resultado encontrado para "${query}"</p>
      </div>
    `;
    return;
  }

  searchResults.innerHTML = filteredBooks.map(book => createBookHTML(book)).join('');
}

// Utility functions
function formatDate(date) {
  return date.toLocaleDateString('pt-BR', { 
    day: '2-digit', 
    month: '2-digit' 
  });
}

function showToast(message) {
  // Create toast element
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 500;
    z-index: 10000;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
    animation: slideDown 0.3s ease;
  `;
  toast.textContent = message;
  
  // Add animation keyframes
  if (!document.querySelector('#toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(toast);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideUp 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Add some interactive touches
document.addEventListener('DOMContentLoaded', function() {
  // Add click animations to stat cards
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });

  // Add hover effects to book items
  document.addEventListener('click', function(e) {
    if (e.target.closest('.book-item')) {
      const bookItem = e.target.closest('.book-item');
      bookItem.style.transform = 'scale(0.98)';
      setTimeout(() => {
        bookItem.style.transform = '';
      }, 150);
    }
  });
});