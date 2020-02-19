import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index";
// import Search from "../components/Search/index";
import { Container, Media, Button, Image, Form } from "react-bootstrap";

import API from "../utils/API";

import "./style.css";


class Find extends Component {

    state = {
        books: [],
        title: "",
        authors: "",
        description:"",
        image: "",
        link: "",
    }

    componentDidMount(){
        this.LoadBook()
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value 
        });
        // console.log(event.target);
        // console.log(this.state.title);
    }

    handleFormSubmit = event => {
        event.preventDafault();

        // console.log(this.state.title);

        API.searchBooks(this.state.title)
        .then(res => this.setState({
            books: res.data.items
        }))
        .catch( err => console.log(err));
    }


    LoadBook = () => {
        API.searchBooks(this.state.title)
        .then(res => {
            this.setState({books: res.data.items})


            console.log(res.data.items);
            // console.log(this.state.books);
        })
    }


    render(){
        return (
            <div>
            <Jumbotron/>


            <Container className="search-container">
                <h4>Book Search</h4>

                <Form>
                    <Form.Group>
                        <Form.Label>Book</Form.Label>

                        <Form.Control  name="title" value={this.state.title} onChange={this.handleInputChange} type="text" placeholder="Search" />

                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
                        Submit
                    </Button>

                </Form>
            </Container>







            <Container className="results">
            <h3 id="result">Results:</h3>


                {this.state.books.map(book => (
                <div className="media-div">
                    <Media key={book.title}>
                        <Media.Body>

                            <Image
                                width={100}
                                height={100}
                                className="align-self-start mr-3"
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt="Image"
                            />

                            <h5><strong>
                                title: {book.volumeInfo.title}
                            </strong></h5>

                            <h6><strong>
                                Author: {book.volumeInfo.authors[0]}
                            </strong></h6>

                            <p>
                                <strong>Description:</strong> {book.volumeInfo.description}
                            </p>

                            </Media.Body>
                        <Button variant="danger">View</Button>
                        <Button variant="success">Save</Button>
                    </Media>
                </div>
                ))}


            </Container>
            </div>
        );
    }
}



export default Find;