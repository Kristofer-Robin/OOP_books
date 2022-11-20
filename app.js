// UI and LS object
const ui = new UI()
const ls = new LS

// event element
const form = document.querySelector('form');

// event
form.addEventListener('submit', addBook);

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title')
    const authorInput = document.querySelector('#author')
    const isbnInput = document.querySelector('#isbn')

    let title = titleInput.value
    let author = authorInput.value
    let isbn = isbnInput.value

    // create book
    const book = (title, author, isbn)
    // add book value to UI visual by UI object
    ui.addBook(book)
    // add books to LS
    ls.addBook(book)


    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault()
}