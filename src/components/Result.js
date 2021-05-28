import React, { Component } from "react";
class Result extends Component {
  state = {
    copy: "Copy",
  };
  handleClick = () => {
    setTimeout(() => this.setState({ copy: "Copied" }), 100);
    navigator.clipboard.writeText(this.props.finalUrl);
    setTimeout(() => this.setState({ copy: "Copy" }), 1000);
  };

  render() {
    return (
      <div>
        <h1>{this.props.initialUrl}</h1>
        <h2>{this.props.finalUrl}</h2>
        <button className="btn btn__square" onClick={this.handleClick}>
          {this.state.copy}
        </button>
      </div>
    );
  }
}

export default Result;
