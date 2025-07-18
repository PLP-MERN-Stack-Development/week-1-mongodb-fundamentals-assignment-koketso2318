// Find all books by Chinua Achebe
db.books.find({ author: "Chinua Achebe" });

// Show only the title and year of all books (no _id)
db.books.find({}, { title: 1, year: 1, _id: 0 });

// Find books with price greater than 150
db.books.find({ price: { $gt: 150 } });

// Find books published between 1950 and 2000
db.books.find({ year: { $gte: 1950, $lte: 2000 } });
