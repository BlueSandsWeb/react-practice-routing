import React from "react";
import { Route, Link } from "react-router-dom";
import PageThreeOne from "./PageThreeOne";

const pageThree = props => {
  return (
    <>
      <h1>Page three here </h1>
      <Link to="/pageThree/One">Page Three dot One</Link>
    </>
  );
};

export default pageThree;
