import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageTwoOne from "./components/PageTwo-One";
import PageThreeOne from "./components/PageThreeOne";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: ""
    };
  }

  greeting = () => {
    console.log("Greeting fired");
    this.setState({ greeting: "Hello" });
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Page One</Link>
          <Link to="/pagetwo">Page Two</Link>
          <Link to="/pagethree">Page Three</Link>
        </div>

        <Route exact path="/" component={PageOne} />
        <Route
          path="/pagetwo"
          render={props => <PageTwo {...props} greeting={this.greeting} />}
        />
        <Route exact path="/pagethree" component={PageThree} />
        <Route path="/pagetwo/one" component={PageTwoOne} />
        <Route path="/pageThree/One" component={PageThreeOne} />
      </Router>
    );
  }
}

export default App;
