//@ts-ignore
//NOTE: cause i can't be bothered right now
const db = connect("mongodb://localhost/library");
console.log(db);

// doing this here instead of the shell directly
const books = db.books.find();
console.log(books);
console.log("=======================")
const greaterThanSeven = db.books.find({ rating: { $gt: 7}});
console.log(greaterThanSeven);
const lessThanSeven = db.books.find({ rating: { $lt: 7}});
console.log(lessThanSeven);
const greaterOrEqualToEight = db.books.find({ rating: { $gte: 7}});
console.log(greaterThanSeven);
const lessOrEqualToEight = db.books.find({ rating: { $lte: 7}});
console.log(lessThanSeven);

//combining queries
const bestBook = db.books.find({ rating: { $gt: 7}, author: "Patrick Rothfuss"});
console.log(bestBook);

console.log("=================== $or Operator ===================");
// or Operator
// like || in js
// ce code dit: envoie-moi les livres avec une evaluation de 6 OU 9
const x = db.books.find({ $or: [{ rating: 6 }, { rating: 9 } ]});
console.log(x);

// donne-moi le livres ayant moins de 300 pages ou plus de 400 pages
console.log("Complex Query: Page Settings");
console.log("======================================");
const y = db.books.find({ $or: [{ pages: { $lt: 300}}, { pages: { $gt: 400}}]});
console.log(y);