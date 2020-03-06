# Google Book Search 

## Summary 
 Google Book Search is a React application that allows users to search for books, getting back the books information and allows them to save selected books to their saved books list. React componenets are built using classes and state is set for each book on both the search books page and the saved books page. This application uses the google books api and utilizes axios to make backend api requests. Express is used for backend functionality and creating the server. MongoDB handles user account information and allows users to store books to the database. 

## Demo
![Deployed Site](https://quiet-lake-98090.herokuapp.com/) 

 
## Technologies Used
- React: Used to dynamically render components on browser and initiate functionality of the game based on user inputs.
- MongoDB: Used as a templating engine for ul HTML snippets that hold the task cards, and separate the generation of the        different HTML from the rest of the JavaScript for cleaner and more organozed code.
- Morgan: Request logger middleware for Node. js that simplifies the process of logging requests to the applicaiton application.
- Express.js - Used for application set up of middle ware for end point connection between the front end and backend.
- Node.js - Used for package managment and to execute JavaScript code to build the command line tool for server-side scripting.
- Git - Version control system to track changes to source code.
- GitHub - Hosts repository that can be deployed to GitHub Pages.
 
## Code Snippet
The folowing code snippet handles the data response from the api request made to google books thought our API.getBooks(). During the mounting lifecycle the api request is made and we map the response setting its within our react card component that is then genereated on the page during the render lifecyle. 
```js
 {this.state.books.length ? (
<Row>
    <Col>
      {this.state.books.map(book => (
      <Card key={book.title} 
            style={{ width: '100%', margin: '10px'}}  
            className="shadow-sm">
          <Row>
              <Col className="col-3">
                  <Card.Img 
                      className="ml-5 pl-5 pt-5" 
                      style={{width: "45%"}} 
                      src={book.image}>
                  </Card.Img>
              </Col>
              <Col className="col-9">
                  <Card.Body>
                  <Button 
                        variant="danger" 
                        className="float-right" 
                        onClick={() => this.deleteBook(book._id)}>
                        Delete
                  </Button>
                  <Button className="float-right mr-2" href={book.link}>View</Button>
                      <Card.Text ><strong>{book.title}</strong></Card.Text>
                      <Card.Text >Written By: <strong>{book.authors}</strong></Card.Text>
                      <Card.Text >{book.description}</Card.Text>
                  </Card.Body>
              </Col>
          </Row>
          </Card>
      ))}
    </Col>
</Row>
) : (
    <h3>No Results to Display</h3>
)}
```

## Built With
* [React](https://reactjs.org/docs/getting-started.html)
* [Reactbootstrap](https://www.npmjs.com/package/react-bootstrap)
* [Node.js](https://nodejs.org/en/)
* [npmjs](https://docs.npmjs.com/)
* [Express.js](https://expressjs.com/)
* [Axios](https://www.npmjs.com/package/axios)
* [MongoDB](https://www.mongodb.com/)
* [Morgan](https://www.npmjs.com/package/morgan)

## Authors

**Kevin Chengyu Ko**
- [LinkedIn](https://www.linkedin.com/in/kevin-ko-ab7a98196/)
- [Link to Github](https://github.com/kokevin678/)
- [Portfolio](https://kokevin678.github.io/portfolio/)

**Chris Melby**
- [LinkedIn](https://www.linkedin.com/in/chris-melby-71106b126/)
- [Link to Github](https://github.com/cmelby)
- [Portfolio](https://cmelby.github.io/portfolio/)

**Casey Moldavon**
- [LinkedIn](https://www.linkedin.com/in/casey-moldavon-442a1761/)
- [Link to Github](https://github.com/casey-moldavon)
- [Portfolio](https://casey-moldavon.github.io/react-portfolio/)

**Yali Miranda**
- [LinkedIn](https://www.linkedin.com/in/yal%C3%AD-miranda-8b4b94199/)
- [Link to Github](https://github.com/yjmiranda)
- [Portfolio](https://yali-miranda-portfolio.herokuapp.com/)

**Rachel Yeung**
- [LinkedIn](https://www.linkedin.com/in/rachel-yeung-814986159/)
- [Link to Github](https://github.com/xrachhel)
- [Portfolio](https://xrachhel.github.io/updatedPortfolio/)

**Andres Jimenez**
- [LinkedIn](https://www.linkedin.com/in/andres-felipe-jimenez-ferreira-b67a35192/)
- [Link to Github](https://github.com/AndresF97?tab=repositories)
- [Portfolio](https://andresf97.github.io/Basic_portfolio_2/public/index.html)
