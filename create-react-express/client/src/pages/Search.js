import React, { Component } from "react";
import Navbar from "../components/Navbar/index";
import Jumbotron from "../components/Jumbotron/index";
import Search from "../components/Search/index";
import { Container } from "react-bootstrap";
import Media from "../components/Media/index";
import API from "../utils/API";


class Find extends Component {

    state = {
        books: [],
        title: "1984",
        authors: "",
        description: "",
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

            console.log(res.data);
        })
    }


    render(){
        return (
            <div>
            <Navbar/>
            <Jumbotron/>

            <Search/>

            <Container className="results">
            <h3 id="result">Results:</h3>

            <Media/>
            </Container>
            </div>
        );
    }
}



export default Find;
