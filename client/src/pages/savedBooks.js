import React, { Component } from "react";
import API from "../utils/API";
//import Container from "../components/Container";
//import Search from "../components/searchForm";
import Jumbotron from '../components/Jumbotron';
import { List, ListItem } from '../components/List';
import { Col, Row } from '../components/Grid';
import SaveBtn from '../components/SaveBtn'

class Books extends Component {
    state = {
      books: []
    };
  
    // componentDidMount() {
    //   this.loadBooks();
    // }

    loadBooks = () => {
        API.getBook()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };


render() {
    return (
      <div>
        <Row>
          {/* <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Book</FormBtn>
            </form>
          </Col> */}
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
              <h3>No saved results to display</h3>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Books;