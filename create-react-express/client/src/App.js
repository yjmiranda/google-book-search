import React from "react";
import Navbar from "./components/Navbar/index";
import "./App.css";
import Jumbotron from "./components/Jumbotron/index";
import Search from "./components/Search/index";
import { Container } from "react-bootstrap";
import Media from "./components/Media/index";

function App() {
  return (
    <div>
    <Navbar/>
    <Jumbotron/>

    <Search/>

    <Container className="results">
      <h3>Results</h3>
      <Media/>
    </Container>
    </div>
  );
}


export default App;
