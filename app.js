// UI and LS object
const ui = new UI()
const ls = new LS()

// elements
const form = document.querySelector('#add-book');
const  bookList = document.querySelector('#book-list')

// events
form.addEventListener('submit', addBook);
document.addEventListener(`DOMContentLoaded`, getBooks);
bookList.addEventListener('click', delBook)

function getBooks(){
    let books = ls.getData(`books`)
    for (let i = 0; i < books.length; i++){
        let book = books[i];
        ui.addBook(book)
    }
}

function addBook(event) {
    // get form input value

    const titleInput = document.querySelector(`#title`)
    const authorInput = document.querySelector(`#author`)
    const isbnInput = document.querySelector(`#isbn`)

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // create book
    const book = new Book(title, author, isbn)
    // add book value to visual by UI object
    ui.addBook(book)
    // add book to LS
    ls.addBook(book)

    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
    event.preventDefault();
}
function delBook(event){
    if(event.target.textContent === 'X'){
        const book = ui.getBook(event.target)
        if(ui.delBook(event.target) === true){
            ls.delBook(book)
        }
    }
}