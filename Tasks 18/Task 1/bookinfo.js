document.addEventListener('DOMContentLoaded', () => {
    // Retrieve necessary elements from the DOM
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
  
    // Array to store the book information
    let books = [];
  
    // Function to add a book
    function addBook(event) {
      event.preventDefault();
  
      // Get the input values from the form
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const genre = document.getElementById('genre').value;
      const review = document.getElementById('review').value;
  
      // Create a book object with the input values
      const book = {
        title,
        author,
        genre,
        review,
      };
  
      // Add the book to the array
      books.push(book);
  
      // Update the book list on the webpage
      displayBooks();
  
      // Reset the form fields
      bookForm.reset();
    }
  
    // Function to display the list of books
    function displayBooks() {
      // Clear the book list element
      bookList.innerHTML = '';
  
      // Iterate over each book in the array
      books.forEach((book, index) => {
        // Create a book card element
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
  
        // Generate the HTML for displaying book details
        const bookDetails = `
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p><strong>Review:</strong> ${book.review}</p>
          <div>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
          </div>
        `;
  
        // Set the innerHTML of the book card with the book details
        bookCard.innerHTML = bookDetails;
  
        // Append the book card to the book list element
        bookList.appendChild(bookCard);
      });
    }
  
    // Function to edit a book
    function editBook(index) {
      const bookCard = bookList.childNodes[index];
      const book = books[index];
      if (!bookCard || !book) return;
  
      // Create input fields for editing book details
      const titleInput = document.createElement('input');
      titleInput.type = 'text';
      titleInput.value = book.title;
  
      const authorInput = document.createElement('input');
      authorInput.type = 'text';
      authorInput.value = book.author;
  
      const genreInput = document.createElement('input');
      genreInput.type = 'text';
      genreInput.value = book.genre;
  
      const reviewInput = document.createElement('textarea');
      reviewInput.value = book.review;
  
      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save';
  
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancel';
  
      // Replace book details with input fields
      bookCard.innerHTML = '';
      bookCard.appendChild(titleInput);
      bookCard.appendChild(authorInput);
      bookCard.appendChild(genreInput);
      bookCard.appendChild(reviewInput);
      bookCard.appendChild(saveBtn);
      bookCard.appendChild(cancelBtn);
  
      // Save button click event listener
      saveBtn.addEventListener('click', () => {
        // Update book object with edited values
        book.title = titleInput.value;
        book.author= authorInput.value;
        book.genre = genreInput.value;
        book.review = reviewInput.value;
  
        // Revert the book card back to displaying book details
        displayBooks();
      });
  
      // Cancel button click event listener
      cancelBtn.addEventListener('click', () => {
        // Revert the book card back to displaying book details
        displayBooks();
      });
    }
  
    // Function to delete a book
    function deleteBook(index) {
      // Remove the book from the array
      books.splice(index, 1);
  
      // Update the book list on the webpage
      displayBooks();
    }
  
    // Event listeners
  
    // Listen for form submission and call addBook function
    bookForm.addEventListener('submit', addBook);
  
    // Listen for click events on the book list and perform appropriate actions
    bookList.addEventListener('click', (event) => {
      if (event.target.classList.contains('edit-btn')) {
        const index = parseInt(event.target.getAttribute('data-index'));
        editBook(index);
      }
  
      if (event.target.classList.contains('delete-btn')) {
        const index = parseInt(event.target.getAttribute('data-index'));
        deleteBook(index);
      }
    });
  
    // Initial display of books on page load
    displayBooks();
  });
  