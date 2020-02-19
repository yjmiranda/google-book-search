import React, { Component } from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import API from '../utils/API';
import Header from "../components/Jumbotron/index";



class Saved extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
        image:"",
        link: ""
    };

    componentDidMount() {
        console.log("component did mount")
        this.loadBooks()
    };

    loadBooks = () => {
        console.log("inside load books")
        API.getBooks()
        
            .then(res => {
                console.log(res.data)
                this.setState({ books: res.data, title: res.data.title, authors: res.data.authors, description: res.data.description, image: res.data.image, link: res.data.link })
                })
                .catch(err => console.log(err))

    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
            <Header/>
            <Container className="results">
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
   
            </Container>
            </div>
        )
    };


}

export default Saved;



