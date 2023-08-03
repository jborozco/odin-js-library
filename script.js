let library = document.getElementById('library');

let myLibrary = [
    {
        title: "Les misérables",
        author: "Victor Hugo",
        bookDate: 1862

    }
];

function Book(title, author, bookDate) {
    this.title = title;
    this.author = author;
    this.bookDate = bookDate;
}

function addBookToLibrary() {
    for (book of myLibrary) {

        library.innerHTML = `
        <div class="library-book">
            <p class="library-book-title">${book.title}</p>
            <p class="library-book-author">${book.author}</p>
            <p class="library-book-date">${book.bookDate}</p>
        </div>
        `


    }
};




addBookToLibrary();