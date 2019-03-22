import React from "react";
import PageTwoTwo from "./PageTwo-Two";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PageTwoOne = props => {
  return (
    <div>
      <h1>Page 2.1 here </h1>
      <Link to="/pagetwo/two">Page 2.2</Link>
    </div>
  );
};

export default PageTwoOne;
