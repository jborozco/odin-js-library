let library = document.getElementById('library');


let myLibrary = [
    {
        title: "Les misérables",
        author: "Victor Hugo",
        bookDate: 1862

    }
];


//Book obj constructor
function Book() {

    this.title = document.getElementById('book-title').value;
    this.author = document.getElementById('book-author').value;
    this.bookDate = document.getElementById('book-date').value;


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

function displayBooks() {
    //Update DOM Library with all books
    library.innerHTML = ""; //reset library
    for (let i = 0; i < myLibrary.length; i++) { //update library with current library
        library.innerHTML += `
            <div class="library-book">
                <p class="library-book-title">${myLibrary[i].title}</p>
                <p class="library-book-author">${myLibrary[i].author}</p>
                <p class="library-book-date">${myLibrary[i].bookDate}</p>
                <button class="library-book-delete" value="${i}" onclick="deleteBook(event)">Delete</button>
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



//Initiate DOM Library on first load
displayBooks();


