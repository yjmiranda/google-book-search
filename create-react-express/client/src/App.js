import React from "react";
import Navbar from "./components/Navbar/index"
import "./App.css";
import Jumbotron from "./components/Jumbotron/index";
import Search from "./components/Search/index";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
    <Navbar/>
    <Jumbotron/>

    <Search/>

    <Container className="results">
      
    </Container>
    </div>
  );
}


export default App;
