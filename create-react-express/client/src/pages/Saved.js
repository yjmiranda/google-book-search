import React, { Component } from 'react';
<<<<<<< HEAD
import { Container, Button, Card, Col, Row, Jumbotron } from 'react-bootstrap';
=======
import { Container, Button } from 'react-bootstrap';
// import { List } from 'react-bootstrap/List';
// import { ListItem } from 'react-bootstrap/ListItem';
>>>>>>> b416efa900d64ed90733e5247cbbb35a17f426c4
import API from '../utils/API';
import Header from "../components/Jumbotron/index";
import "./LookFor.css"



class Saved extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
<<<<<<< HEAD
        description: "",
        image:"",
=======
        description:"",
        image: "",
>>>>>>> b416efa900d64ed90733e5247cbbb35a17f426c4
        link: ""
    };

    componentDidMount() {
        console.log("component did mount")
        this.loadBooks()
    };

    loadBooks = () => {
        console.log("insode load books")
        API.getBooks()
<<<<<<< HEAD
        
            .then(res => {
                console.log(res.data)
                this.setState({ books: res.data, title: res.data.title, authors: res.data.authors, description: res.data.description, image: res.data.image, link: res.data.link })
                })
                .catch(err => console.log(err))

=======
            .then(res =>
                this.setState({ books: res.data, title: "", authors: "", description: "", image: "", link: "" })
                    .catch(err => console.log(err))
            )
>>>>>>> b416efa900d64ed90733e5247cbbb35a17f426c4
    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    }


    render() {
        return (
<<<<<<< HEAD
            <div>
            <Header/>
            <Container classNamme="results">
                <h1 id="result">Your Saved Books:</h1>
                 <Row className="justify-content-center">
                {this.state.books.length ? (
                    <Row>
                        <Col>
                            {this.state.books.map(book => (
                            <Card key={book.title} style={{ width: '100%', margin: '10px'}} className="shadow-sm">
                                <Row>
                                <Col className="col-3">
                                    <Card.Img className="ml-5 pl-5 pt-5" style={{width: "45%"}} src={book.image}></Card.Img>
                                </Col>
                                <Col className="col-9">
                                <Card.Body>
                                <Button variant="danger" className="float-right" onClick={() => this.deleteBook(book._id)}>Delete</Button>
                                <Button className="float-right mr-2" href={book.link}>View</Button>
                                    <Card.Text ><strong>{book.title}</strong></Card.Text>
                                    <Card.Text >Written By: <strong>{book.authors}</strong></Card.Text>
                                    <Card.Text >{book.description}</Card.Text>
                                </Card.Body>
                                </Col>
                                </Row>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                ) : (
                    <h3>No Results to Display</h3>
                )}
             </Row>  
   
=======
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
>>>>>>> b416efa900d64ed90733e5247cbbb35a17f426c4
            </Container>
            </div>
        )
    };


}

export default Saved;



