import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index";
import Search from "../components/Search/index";
import { Container, Media, Button  } from "react-bootstrap";
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
            this.setState({books: res.data})

            // console.log(res.data);
            console.log(this.state.books);
        })
    }


    render(){
        return (
            <div>
            <Jumbotron/>

            <Search/>

            <Container className="results">
            <h3 id="result">Results:</h3>



                <div className="media-div">
                    <Media>
                    <Media.Body>

                        <img
                            width={100}
                            height={100}
                            className="align-self-start mr-3"
                            src={this.state.image}
                            alt="Dis shit"
                            />

                            <h5><strong>
                                title: {this.state.title}
                            </strong></h5>

                            <h6><strong>
                                Author: {this.state.authors}
                            </strong></h6>

                            <p>
                                Description: {this.state.description}
                            </p>


                    </Media.Body>
                        <Button variant="danger">View</Button>
                        <Button variant="success">Save</Button>
                    </Media>
                </div>



            </Container>
            </div>
        );
    }
}



export default Find;