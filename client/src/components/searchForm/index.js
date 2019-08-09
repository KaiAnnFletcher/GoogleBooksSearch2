import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="author">Author Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="author"
          list="books"
          type="text"
          className="form-control"
          placeholder="Type in an author's name to begin"
          id="author"
        />
        <datalist id="books">
          {props.books.map(author => (
            <option value={author} key={author} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}
SearchForm.defaultProps = {
  books: []
};
export default SearchForm;
