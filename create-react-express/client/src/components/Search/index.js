import React from 'react';
import { Col, FormControl, Form, Button, Container } from 'react-bootstrap';
import "./style.css";


 function Searchb(props) {

return (

    <Container className="search-container">

        <h4>Book Search</h4>
        <h5>Book</h5>
        
    <Col>
        <Form.Row>
            <FormControl type="text" placeholder="Search"/>
        </Form.Row>
        <Button variant="primary" className="float-right" >Search</Button>
    </Col>
    </Container>
)};

export default Searchb;