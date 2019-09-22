import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}


// import React from "react";
// import "./style.css";

// // Using the datalist element we can create autofill suggestions based on the props.books array
// function SearchForm(props) {
//   return (
//     <form className="search">
//       <div className="form-group">
//         <label htmlFor="author">Author Name:</label>
//         <input
//           value={props.search}
//           onChange={props.handleInputChange}
//           name="author"
//           list="books"
//           type="text"
//           className="form-control"
//           placeholder="Type in an author's name to begin"
//           id="author"
//         />
//         <datalist id="books">
//           {props.books.map(author => (
//             <option value={author} key={author} />
//           ))}
//         </datalist>
//         <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }

// SearchForm.defaultProps = {
//   books: [],
  
// };

// export default SearchForm;
