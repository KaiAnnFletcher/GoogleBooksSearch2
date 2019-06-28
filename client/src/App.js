import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/savedBooks";
import Nav from "./components/Nav";
import Search from "./pages/searchedBooks";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Books} />
    </div>
    </Router>
  );
}

export default App;
