import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <div className="img-fluid"> {result} </div>
        </li>
      ))}
    </ul>
  );
}

SearchResults.defaultProps = {
  results: [],
};

export default SearchResults;
