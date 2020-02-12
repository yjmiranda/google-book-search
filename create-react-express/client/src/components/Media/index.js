import React from 'react';
import { Media, Button } from 'react-bootstrap';

function Mediab () {
    return (
    <div>
        <Media>
        <Media.Body>

            <img
                width={100}
                height={100}
                className="align-self-start mr-3"
                src="http://books.google.com/books/content?id=gqX7rQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
                alt="Generic placeholder"
                />

                <h5><strong>Boot Title</strong></h5>
                <h6><strong>Subtitle title shit goes here</strong></h6>
                <h6><strong>The Bitch who wrote it</strong></h6>

                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
                <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                    leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                </p>
        </Media.Body>
            <Button variant="danger">View</Button>
            <Button variant="success">Save</Button>
        </Media>
    </div>
)};

    export default Mediab;