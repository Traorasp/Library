const library = document.querySelector('.library');

const bookFormButton = document.querySelector('.controls button');
const bookForm = document.querySelector('.form');
bookFormButton.addEventListener('click', displayForm);

const addBookButton = document.querySelector('.submit-form');
addBookButton.addEventListener('click', addBookToLibrary);

const exitButton = document.querySelector(".exit-form");
exitButton.addEventListener('click', exitForm)

let myLibrary = [];

//Allows for the form to be cleared and hidden without making a book
function exitForm() {
    bookForm.classList.add('hide');
    clearForm();
}

//Displays the form by removing hide class
function displayForm() {
bookForm.classList.remove('hide');
}

//Book constructor that makes a book with a tittle, author, number of pages and  if it was read or not
function Book(title, author, numPages, read){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = (read =='on') ? "Read" : "Unreads";
}

//Creates a book ith the information from the form, adds it to the library array clears the form and runs displayBook() funtion
function addBookToLibrary() {
    let book = new Book(document.getElementById("title").value, 
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("read").value);
    myLibrary.push(book);
    bookForm.classList.add('hide');
    clearForm();
    displayBooks();
}

//Clears the form and any inputs that were previously left there
function clearForm(){
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = "";
    document.querySelector('#read').checked = false;
}

//Creates a book div and inserts all the book properties into it before adding it to the library section
function displayBooks() {
        let book = myLibrary[myLibrary.length-1];
        let bookBody = document.createElement('div');
        bookBody.classList.add('book');
        let bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Author: ${book.author}`;
        let bookTitle = document.createElement('p');
        bookTitle.textContent = `Title: ${book.title}`;
        let bookNumPage = document.createElement('p');
        bookNumPage.textContent = `Page # : ${book.numPages}pg`;
        let bookRead = document.createElement('p');
        bookRead.textContent = `Read: ${book.read}`;
        bookBody.appendChild(bookTitle)
        bookBody.appendChild(bookAuthor)
        bookBody.appendChild(bookNumPage)
        bookBody.appendChild(bookRead)
        library.appendChild(bookBody);

}