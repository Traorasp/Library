const body = document.querySelector('body');

let test = new Book('abc', 'abx', 34, true);
let test2 = new Book('a1bc', 'abx', 344, true);


let myLibrary = [];

addBookToLibrary(test);
addBookToLibrary(test2);
displayBooks();

function Book(author, title, numPages, read){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookBody = document.createElement('div');
        bookBody.classList.add('book');
        let bookAuthor = document.createElement('p');
        bookAuthor.textContent = `${book.author}`;
        let bookTitle = document.createElement('p');
        bookTitle.textContent = `${book.title}`;
        let bookNumPage = document.createElement('p');
        bookNumPage.textContent = `${book.numPages}`;
        let bookRead = document.createElement('p');
        bookRead.textContent = `${book.read}`;
        bookBody.appendChild(bookAuthor)
        bookBody.appendChild(bookTitle)
        bookBody.appendChild(bookNumPage)
        bookBody.appendChild(bookRead)
        body.appendChild(bookBody);
    }
}