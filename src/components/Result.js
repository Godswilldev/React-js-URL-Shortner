import React, { Component } from "react";
import Buttons from "./Buttons";
class Result extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.initialUrl}</h1>
        <h2>{this.props.finalUrl}</h2>
        <Buttons
          type="square"
          size="1.5rem 4rem"
          text="Copy"
          onClick={this.props.copy}
        />
      </div>
    );
  }
}

export default Result;
