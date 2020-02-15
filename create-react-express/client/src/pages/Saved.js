import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
// import { List } from 'react-bootstrap/List';
// import { ListItem } from 'react-bootstrap/ListItem';
import API from '../utils/API';


class Saved extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description:"",
        image: "",
        link: ""
    };

    componentDidMount() {
        this.loadBooks()
    };

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", authors: "", description: "", image: "", link: "" })
                    .catch(err => console.log(err))
            )
    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>
                {/* {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                            <ListItem key={book._id}>
                                <img src={book.image} />
                                <strong>
                                    {book.title} by {book.authors}
                                </strong>

                                <p>{book.description}</p>
                                <Button href={book.link}>View</Button>
                                <Button onClick={() => this.deleteBook(book._id)}>Delete</Button>
                            </ListItem>
                        ))}
                    </List>
                ) : ( */}
                        <h3>No Results to Display</h3>
                    {/* )} */}
            </Container>
        )
    };









}

export default Saved;