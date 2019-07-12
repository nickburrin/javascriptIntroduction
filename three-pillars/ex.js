class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)` and `printFavoriteBooks()`
	addFavoriteBook(bookName) {
		if (!String(bookName).toLowerCase().includes("great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	
	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}

function loadBooks(bookshelf) {
	fakeAjax(BOOK_API, function onBooks(bookNames) {
		for (let title of bookNames) {
			bookshelf.addFavoriteBook(title);
		}

		bookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";
var myBookshelf = new Bookshelf();
loadBooks(myBookshelf);


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,callback) {
	setTimeout(function fakeLoadingDelay(){
		callback([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
