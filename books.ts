//@ts-ignore
//NOTE: cause i can't be bothered right now
const db = connect("mongodb://localhost/library");
console.log(db);

// doing this here instead of the shell directly
const books = db.books.find();
console.log(books);
console.log("====================================");
// $in: give me data whose values include the ones listed in the array
// dans notre cas, donne-moi les livres dont les évaluations ont des valeurs 6, ou 8 ou 9
const x = db.books.find({ rating: {$in: [6,8]}});
console.log(x);
// fait exactemment la même chose que:
const x2 = db.books.find({ $or: [{ rating: 6 }, { rating: 8 }]});
// mais il est clair que le premier est beaucoup plus facile à ecrire

console.log("====================================");
// l'inverse: $nin
// donne-moi les livres dont les valeurs ne comprennent pas les valeurs 6, ou 8 ou 9
const y = db.books.find({ rating: {$nin: [6,8]}});
console.log(y);
 