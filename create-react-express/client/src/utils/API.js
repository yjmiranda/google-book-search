import axios from "axios";

export default ({
    // search books
    searchBooks: function (query) {
        return (axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyA0my9YP87S1Sj345dHQEOA4CrNA9THlpc`)
            .then(({ data: { results } }) => res.json(results.data))
            .catch(err => res.status(422).json(err)));
    },
    // save new book
    addBooks: function (book) {
        return axios.post("/api/books", book);
    },
    // delete book
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
});
