const library = document.querySelector('.library');

const bookFormButton = document.querySelector('.controls button');
const bookForm = document.querySelector('.form');
bookFormButton.addEventListener('click', displayForm);

const addBookButton = document.querySelector('.submit-form');
addBookButton.addEventListener('click', addBookToLibrary);

const exitButton = document.querySelector(".exit-form");
exitButton.addEventListener('click', exitForm)


let test = new Book('abc', 'abx', 34, true);
let test2 = new Book('a1bc', 'abx', 344, true);


let myLibrary = [];

function exitForm() {
    bookForm.classList.add('hide');
}

function displayForm() {
bookForm.classList.remove('hide');
}

function Book(title, author, numPages, read){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
}

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
tgt
function clearForm(){
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = "";
    document.querySelector('#read').checked = false;
}

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
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
}