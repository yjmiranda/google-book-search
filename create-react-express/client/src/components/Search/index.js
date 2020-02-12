import React from 'react';
import { FormControl, Form, Button, Container } from 'react-bootstrap';

 function Searchb() {

return (

    <Container>

    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
    </Form>

    </Container>
)};

export default Searchb;