// ```javascript
// const books = [
//   { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951, isAvailable: true },
//   { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861, isAvailable: false },
//   { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear: 1866, isAvailable: true },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925, isAvailable: false },
//   { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
// ];
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951, isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861, isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear: 1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925, isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
  ];
// Write a JavaScript program that performs the following tasks:
// Create a function called getAvailableBooks that returns an array of all available books.
function getAvailableBooks(){
console.log(books.filter(book=>book.isAvailable))
return books.filter(book=>book.isAvailable)
}
getAvailableBooks()

//by author
function getBooksByAuthor(authorName) {
  console.log(books.filter(book => book.author === authorName))
  return books.filter(book => book.author === authorName);
}

// Adds new book
function addNewBook(book) {
  if (!book.title || !book.author || !book.publicationYear || book.isAvailable === undefined) {
    console.log("Error: The book object must contain title, author, publicationYear, and isAvailable properties.");
    return ("Error: The book object must contain title, author, publicationYear, and isAvailable properties.");;
  }
  books.push(book);
}
addNewBook({title:"Tulsa King", author:" Maureen", publicationYear:2026, isAvailable:true})
console.log(books)

// changes is available property
function checkoutBook(title) {
  const book = books.find(book => book.title === title);
  if (book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      console.log(`${title} has been checked out.`);
    } else {
      console.log(`${title} is not available for checkout.`);
    }
  } else {
    console.log(`${title} is not found in the library.`);
  }
}


// returns a book as per the title
function returnBook(title) {
  const book = books.find(book => book.title === title);
  if (book) {
    if (!book.isAvailable) {
      book.isAvailable = true;
      console.log(`${title} has been returned.`);
    } else {
      console.log(`${title} does not belong to the library.`);
    }
  } else {
    console.log(`${title} is not found in the library.`);
  }
}