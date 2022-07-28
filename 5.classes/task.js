// Задача №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(fix) {
        if (fix < 0) {
            this._state = 0;
        } else if (fix > 100) {
            this._state = 100;
        } else {
            this._state = fix;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "Magazine"
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "Book"
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "Novel"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "Fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "Detective"
    }
}

// Задача №2

class Library {
    constructor(name) {
        this.name = name
        this.books = []
    }
    addBook(object) {
        if(object.state > 30) {
        this.books.push(object)
        }
    }
    findBookBy(type, value) {
        return this.books.find((item) => item[type] === value) || null;    
    }
    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex((item) => item.name === bookName);
        return bookIndex === -1 ? null : this.books.splice(bookIndex, 1)[0];
    }
}