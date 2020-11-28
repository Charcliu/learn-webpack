import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import test from "./images/test.jpg";

const App = () => {
  return (
    <>
      <div className="test">Hello Charlie</div>
      <img src={test}></img>
      <h1>Hello Webpack</h1>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
