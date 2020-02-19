import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index";
import { Container, Media, Button, Image,Form,FormControl } from "react-bootstrap";
import API from "../utils/API";
import "./style.css";
class Find extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description:"",
        image: "",
        link: ""
    }
    componentDidMount(){
        this.LoadBook()
    }
    handleInputChange = event =>{
        const {name, value } = event.target;
        this.setState({
            [name] : value 
        })
    }   
    handleFormSubmit = event =>{
        event.preventDefault()
        API.searchBooks(this.state.title)
        .then(res => this.setState({books:res.data.items}))
                  
        .catch(err => console.log(err))
    }
    LoadBook = () => {
        API.searchBooks(this.state.title)
        .then(res => {
        
            this.setState({books: res.data.items})
            console.log(res.data.items);
        })
    }
    saveButtonSubmit = (event) =>{
        event.preventDefault()
        const infoArr = event.target.value;
        const infoSplit  = infoArr.split(",")
        API.addBooks({
            title: infoSplit[0],
            authors: infoSplit[2],
            description: event.target.name,
            image: infoSplit[1],
            link: infoSplit[3]
        }).then(res =>{
            console.log(res)
        })
        .catch(err => console.log(err))
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
            <div>
                {this.state.books.map(book => (
                <div className="media-div">
                    <Media key={book.title}>
                        <Media.Body>
                            {book.volumeInfo.imageLinks ? (
                                <Image
                                width={100}
                                height={100}
                                className="align-self-start mr-3"
                                src={book.volumeInfo.imageLinks.thumbnail} 
                                alt="Image"
                                />
                            ) : (
                                <Image
                                width={100}
                                height={100}
                                className="align-self-start mr-3"
                                src="placeholder" 
                                alt="Image"
                                />
                            )
                            }
                            <h5><strong>
                                title: {book.volumeInfo.title}
                            </strong></h5>
                            
                            {book.volumeInfo.authors? (
                                <h6><strong>
                                Author: {book.volumeInfo.authors[0]}
                            </strong></h6>
                            ):(
                                <h6><strong>
                                Author: Not Defined
                            </strong></h6>
                            )
                            }
                            <p>
                                Description: {book.volumeInfo.description}
                            </p>
                            {/* <p src="{book.volumeInfo.accessInfo.webReaderLink}">{book.volumeInfo.title}</p> */}
                            </Media.Body>
                        <Button variant="danger" href={book.volumeInfo.previewLink}>View</Button>
                        <Button variant="success" type="submit" onClick={this.saveButtonSubmit} name={book.volumeInfo.description} value={[book.volumeInfo.title,book.volumeInfo.imageLinks.thumbnail,book.volumeInfo.authors[0],book.volumeInfo.previewLink]}>Save</Button>
                    </Media>
                </div>
                
                ))} 
                </div>
            
            </Container>
            </div>
        );
    }
}
export default Find;