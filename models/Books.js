const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    title: {
        type: string,
        required: true,
    }
})

const Book = mongoose.model("Book", BooksSchema);

module.exports.default = Books
