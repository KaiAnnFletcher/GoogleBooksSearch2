import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input,  FormBtn } from "../components/SearchForm";
//import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: "",
    };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadBooks = () => {
    API.getRandomBook()
      .then(res => this.setState({ books: res.data.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="author" placeholder="Author (required)" />
              <FormBtn onClick = {this.loadBooks.bind(this)}>Submit Author Name</FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
        <Col size="md-12">
        <Jumbotron>
        <h1>Book List</h1>
        </Jumbotron>
        {this.state.books ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <a href={"/books/" + book._id}>
                  <strong>
                    {book.title} by {book.author}
                  </strong>
                </a>
                {/* <DeleteBtn /> */}
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>There are No Results to Display</h3>
        )}
        </Col>
        </Row>
      </Container>
    );
  }
}

Search.defaultProps = {
  books: [],
  length:[]
};
export default Search;

//   // When the component mounts, get a list of all available base breeds and update this.state.breeds
//   componentDidMount() {
//     API.getRandomBook()
//       .then(res => this.setState({ books: res.data.data }))
//       .catch(err => console.log(err));
//   }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getRandomBook(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Search By Author!</h1>
         
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             books={this.state.books}
//           />
//           <SearchResults results={this.state.results} />
//         </Container>
//       </div>
//     );
//   }
// }
