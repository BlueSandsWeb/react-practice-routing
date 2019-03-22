import React from "react";
import PageTwoTwo from "./PageTwo-Two";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageOne from "./PageOne";

class pageTwo extends React.Component {
  constuctor() {
    this.state = {
      stateThings: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Page two here </h1>
        <Link onClick={this.props.greeting} to="/">
          Page One
        </Link>

        <Link onClick={this.props.greeting} to="/pagetwo/one">
          Page 2.1
        </Link>
        <p onClick={this.props.greeting}>Greeting</p>
        <Route path="/pagetwo/two" component={PageTwoTwo} />
      </div>
    );
  }
}

export default pageTwo;
