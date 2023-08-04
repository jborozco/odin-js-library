let library = document.getElementById('library');

let newBook;


let myLibrary = [
    {
        title: "Les misérables",
        author: "Victor Hugo",
        bookDate: 1862

    }
];

const initialLibrary = myLibrary;

function Book() {
    titleValue = document.getElementById('book-title').value;
    authorValue = document.getElementById('book-author').value;
    dateValue = document.getElementById('book-date').value;


    this.title = titleValue;
    this.author = authorValue;
    this.bookDate = dateValue;
}

function displayBooks() {
    //Update DOM Library with all books
    library.innerHTML = ""; //reset library
    for (let i = 0; i < myLibrary.length; i++) { //update library with current library
        library.innerHTML += `
            <div class="library-book">
                <p class="library-book-title">${myLibrary[i].title}</p>
                <p class="library-book-author">${myLibrary[i].author}</p>
                <p class="library-book-date">${myLibrary[i].bookDate}</p>
            </div>
            `
    }
    //Clear form fields
    titleValue = "";
    authorValue = "";
    dateValue = "";
}


function addBookToLibrary() {

    //Add a book to myLibrary
    newBook = new Book();
    myLibrary.push(newBook);
    //Update DOM
    displayBooks();

};



//Initiate DOM Library on first load
displayBooks();


