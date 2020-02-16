import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index";
import Search from "../components/Search/index";
import { Container, Media, Button, Image } from "react-bootstrap";
import API from "../utils/API";

// import "./style.css";


class Find extends Component {

    state = {
        books: [],
        title: "Old Man and The Sea",
        authors: "",
        description:"",
        image: "",
        link: ""
    }

    componentDidMount(){
        this.LoadBook()
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

            <Search/>

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
                                Description: {book.volumeInfo.description}
                            </p>
                            {/* <p src="{book.volumeInfo.accessInfo.webReaderLink}">{book.volumeInfo.title}</p> */}

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