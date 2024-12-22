"use strict";
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class LibrayManager {
    constructor(book = []) {
        this.book = [];
    }
    addBook(title, author, year) {
        const id = this.listBooks.length + 1;
        let newBook = new Book(id, title, author, year);
        this.book.push(newBook);
        console.log("Add book completed!!!");
    }
    listBooks() {
        if (this.listBooks.length === 0) {
            console.log("Not found any book in lists!!!");
        }
        else {
            console.log("ListBook: ");
            this.book.forEach(book => {
                console.log(`ID: ${book.id}, Title: ${book.title} , Author: ${book.author}, Year: ${book.year}`);
            });
        }
    }
    removeBook(id) {
        const index = this.book.findIndex(book => book.id === id);
        if (index !== -1) {
            this.book.splice(index, 1);
        }
    }
    searchBook(title) {
        const Book = this.book.find(book => book.title === title);
        if (Book) {
            console.log(`Name of Book: ${Book.title}, ID: ${Book.id}, Author: ${Book.author}, Year: ${Book.year}`);
        }
    }
}
class MainBookManager {
    constructor() {
        this.library = new LibrayManager();
    }
    bootstrap() {
        let bool = true;
        while (bool) {
            console.log("Menu: ");
            console.log("=====================");
            console.log("1. Add new book on Library");
            console.log("2. Show list book on Library");
            console.log("3. Delete book from list Book by Id");
            console.log("4. Search book by name of book");
            console.log("5. Stop programing");
            let choice = Number(prompt("Enter your choice: "));
            switch (choice) {
                case 1:
                    let title = String(prompt("Enter your title book you wanna add: "));
                    let author = String(prompt("Enter author of book: "));
                    let year = Number(prompt("Enter year of book public: "));
                    this.library.addBook(title, author, year);
                    break;
                case 2:
                    this.library.listBooks();
                    break;
                case 3:
                    let index = Number(prompt("Enter id of book u wanna delete: "));
                    this.library.removeBook(index);
                    break;
                case 4:
                    let titleBook = String(prompt("Enter title of book you will searching: "));
                    this.library.searchBook(titleBook);
                    break;
                case 5:
                    break;
                case 6:
                    console.log("Invalid");
                    break;
            }
        }
    }
}
