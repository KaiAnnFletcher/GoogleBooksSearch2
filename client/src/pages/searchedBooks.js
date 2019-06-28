import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import { List, ListItem } from '../components/List';
import { Col, Row } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import SaveBtn from '../components/SaveBtn';
import searchForm from '../components/searchForm';

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  componentDidMount() {
    API.getRandomBook()
      .then(res => this.setState({ books: res.data.message }))
      .catch(err => console.log(err));
  }


  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRandomBook(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Author Should I Search?</h1>
            </Jumbotron>
            
            <searchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
              {/* <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}
              {/* <FormBtn>Submit Author</FormBtn> */}
            
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <SaveBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Search;