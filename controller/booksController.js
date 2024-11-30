// Dummy data
let books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ];
  
  // Get all books
  const getBooks = (req, res) => {
    res.json(books);
  };
  
  // Get a book by ID
  const getBookById = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  };
  
  // Create a new book
  const createBook = (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
  };
  
  // Update a book by ID
  const updateBook = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });
  
    const { title, author } = req.body;
    if (title) book.title = title;
    if (author) book.author = author;
  
    res.json(book);
  };
  
  // Delete a book by ID
  const deleteBook = (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).json({ message: 'Book not found' });
  
    books.splice(bookIndex, 1);
    res.status(204).send();
};

export { getBooks, getBookById, createBook, updateBook, deleteBook };
