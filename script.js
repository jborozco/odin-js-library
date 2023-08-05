let library = document.getElementById('library');


let myLibrary = [
    {
        title: "Les misérables",
        author: "Victor Hugo",
        bookDate: 875,
        isRead: true

    },
    {
        title: "L'étranger",
        author: "Albert Camus",
        bookDate: 351,
        isRead: true

    },
    {
        title: "Guerre et Paix",
        author: "Léon Tolstoï",
        bookDate: 1785,
        isRead: false

    },


];


//Book obj constructor
function Book() {

    this.title = document.getElementById('book-title').value;
    this.author = document.getElementById('book-author').value;
    this.bookDate = document.getElementById('book-date').value;
    this.isRead = document.getElementById('book-read').checked;

}





//Toggle the book form
function toggleForm() {
    //Reset form before toogle  
    document.getElementById('book-title').value = "";
    document.getElementById('book-author').value = "";
    document.getElementById('book-date').value = "";
    //Toogle
    let formContainer = document.getElementById("form-container");
    formContainer.classList.toggle("visible");
}

//Conditional DOM display 
function isReadMessage(book) {
    if (book.isRead) {
        return 'Read'
    }
    else {
        return 'Not read'
    }
}

function showChecked(book) {
    if (book.isRead) {
        return 'checked'
    }
    else {
        return ''
    }
}

function displayBooks() {
    //Update DOM Library with all books
    library.innerHTML = ""; //reset library
    for (let i = 0; i < myLibrary.length; i++) {
        //update library with current library
        library.innerHTML += `
        <div class="library-book">
        <div class="book-header">
            <div class="book-header-line1">
                <p class="library-book-title">${myLibrary[i].title}</p>
                <input type="image" class="library-book-delete" value="${i}" onclick="deleteBook(event)"
                    src="img/delete.svg">
            </div>
            <p class="library-book-author">by ${myLibrary[i].author}</p>
            <p class="library-book-date">${myLibrary[i].bookDate} pages</p>

        </div>
        <div class="book-footer">
            <div class="switch-area">
                <label class="switch">
                    <input type="checkbox" value="${i}" onclick="toggleReading(event)">
                    <span class="slider round ${showChecked(myLibrary[i])}"></span>
                </label>
                <p>${isReadMessage(myLibrary[i])}</p>
            </div>
        </div>
    </div>
            `
    }

}


function addBookToLibrary() {
    //Add a book to myLibrary
    let newBook = new Book();
    myLibrary.push(newBook);
    //Update DOM
    displayBooks();
    toggleForm()
};

function deleteBook(event) {
    let position = event.target.value;
    myLibrary.splice(position, 1);
    displayBooks();
}



function toggleReading(event) {
    let position = event.target.value;
    myLibrary[position].isRead = !myLibrary[position].isRead;
    displayBooks();

}



//Initiate DOM Library on first load
displayBooks();

