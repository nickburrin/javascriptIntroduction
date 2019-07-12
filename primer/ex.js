// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName)
{
    if (bookName.toLowerCase().includes("great"))
        return;

    favoriteBooks.push(bookName);
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
    console.log(`Favorite books has ${favoriteBooks.length} items in it:`);
    for (let title of favoriteBooks)
        console.log(`- ${title}`);
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

console.log(favoriteBooks)

// TODO: print out favorite books
printFavoriteBooks();