const db = connect("mongodb://localhost/bookstore");
console.log(db);

// doing this here instead of the shell directly
const books = db.books.find();
console.log(books);

const numBooks = db.books.find().count(); // this is a lot like .length for an array
console.log(numBooks);

// can combine use filtering amongst it
const numBooksByBrandon = db.books.find({ authour: "Brandon Sanderson" }).count();
console.log(numBooksByBrandon);

const threeBooksOnly = db.books.find().limit(3); // limits our data to show only the number declared in the limit function argument
console.log(threeBooksOnly);

// Sorting

/**
 * the sort takes an object as an argument
 * the object property is the property you want to sort you data by
 * the value is 1 or -1. 1 = sort by ascending order. -1 = sort by descending order
 */
console.log("==================== Sorted Books By Title (====================");
const sortedBooksByTitle = db.books.find().sort({ title: 1 });
console.log(sortedBooksByTitle);

console.log("==================== Sorted Books By Rating (====================");
const sortedBooksByRating = db.books.find().sort({ rating: 1 });
console.log(sortedBooksByRating);
