import axios from "axios";

export default ({
    // save new book
    addBooks: function (book) {
        return axios.post("/api/books", book);
    },
    // delete book
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // get saved books
    getBooks: function(){
        return axios.get("/api/books")
    },
    // search books
    searchBooks: function(){
        return axios.get("/api/search", {params: {q: query}})
    }
});
