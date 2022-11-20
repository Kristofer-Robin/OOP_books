class UI {
    addBook(book){
        // create <tr> element
        const tr = document.createElement('tr')
        // td for title, author and isbn
        for (let element in book){
            //
            console.log(name + " " + book[name])
            let td = document.createElement('td')
            let text = document.createTextNode(book[name])
            td.appendChild(text)
            tr.appendChild(td)
            console.log(tr)
        }
        let td = document.createElement('td')
        const link = document.createElement('a')
        link.setAttribute('href', '#')
        // add
        link.appendChild(document.createTextNode('X'))
        // add <a> to <li>
        td.appendChild(link)
        // add td to tr
        tr.appendChild(td)
        // add tr to tbody
        const booksList = document.querySelector('#books-list')
        booksList.appendChild(tr)
    }
}