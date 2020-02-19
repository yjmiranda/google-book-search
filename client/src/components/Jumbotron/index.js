import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import "./style.css";



function Jumbot () {

return (

<Container className="heading-title">
    <Jumbotron>

        <Container>
            <div className="text-center">
                <h1>(React) Google Books Search</h1>
                <h3>Search for and Save Books of Interest</h3>
            </div>
        </Container>

    </Jumbotron>
</Container>
)
};

export default Jumbot;