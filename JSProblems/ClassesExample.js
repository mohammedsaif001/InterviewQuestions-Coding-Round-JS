class Book {
    constructor(name, desc, author) {
        this.name = name
        this.desc = desc
        this.author = author
    }
}

class Magazine extends Book {
    constructor(name, desc, author, publisher) {
        super(name, desc, author)
        this.publisher = publisher
    }
}

const book1 = new Book("Book 1", "Description 1", "author1")
const magazine1 = new Magazine("Book 2", "Description 2", "author2", "publisher2")
console.log(book1)
console.log(magazine1)