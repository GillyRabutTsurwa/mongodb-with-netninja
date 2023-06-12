const db = connect("mongodb://localhost/bookstore");
console.log(db);

// doing this here instead of the shell directly
const frenchBooks = [
    {
        title: "La peste",
        authour: "Albert Camus",
        pages: 275,
        genres: ["dystopian", "non-fiction", "dark"],
        rating: 6,
    },
    {
        title: "Dans le gant de fer",
        authour: "Claire Martin",
        pages: 325,
        genres: ["history", "non-fiction"],
        rating: 7,
    },
    {
        title: "La mano negra",
        authour: "Romain Molina",
        pages: 245,
        genres: ["football", "non-fiction"],
        rating: 8,
    },
];

const books = db.books.find();
db.books.insertMany(frenchBooks);
console.log(books);
