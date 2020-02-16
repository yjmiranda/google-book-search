import React from "react";
import Navbar from "./components/Navbar/index";
import "./App.css";
// import Jumbotron from "./components/Jumbotron/index";
// import SearchBar from "./components/Search/index";
// import { Container } from "react-bootstrap";
// import Media from "./components/Media/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved"
import search from "./pages/search"



function App() {
  return (
    <div>
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}


export default App;

