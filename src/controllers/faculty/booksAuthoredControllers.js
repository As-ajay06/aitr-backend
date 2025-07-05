const booksAuthored = require("../../models/faculty/booksChapterAuthored");

exports.createBooksAuthored = async (req, res) => {
    const book = new booksAuthored(req.body);
    await book.save();
    res.json({
        message: "Book authored created successfully"
    });
}

exports.getAllBooksAuthored = async (req, res) => {
    const books = await booksAuthored.find({});
    res.json({
        books
    });
}

exports.deleteBooksAuthoredById = async (req, res) => {
    const { id } = req.params;
    const bookData = await booksAuthored.findByIdAndDelete(id);
    if (!bookData) {
        return res.status(404).json({ message: "Book authored not found" });
    }
    res.json({
        message: "Book authored deleted successfully"
    });
}

