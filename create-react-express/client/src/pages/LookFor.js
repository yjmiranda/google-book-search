import React,{Component} from "react";
import Navbar from "../components/Navbar/index";
import "./LookFor.css";
import Jumbotron from "../components/Jumbotron/index";
import Search from "../components/Search/index";
import { Container } from "react-bootstrap";
import Media from "../components/Media/index";
import API from "../utils/API"



class LookFor extends Component{
  state = {
    books: [],
    book: "",
    authors: "",
    description: "",
    image:"",
    link: ""
};

loadBooks = () => {
    API.searchBooks()
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
handleInputChange = event =>{
  const { name, value} = event.target;
  this.setState({
    [name] : value
  })
}
 handleFormSubmit = event =>{
   event.preventDefault()
  if(this.state.book){
    API.searchBooks(this.state.book)
    .then(res => console.log(res))
  }


 }
    render(){
      return(
        <div>
          <Navbar/>
  <Jumbotron>
    <h1>hello</h1>
  </Jumbotron>

  <Search  
    name = "bookSearch"
    value = {this.book}
    handleSubmit ={handleSubmit}
    />

  <Container className="results">
    <h3 id="result">Results:</h3>

    <Media/>
  </Container>


        </div>
    
      )
    
    }
}

export default LookFor;