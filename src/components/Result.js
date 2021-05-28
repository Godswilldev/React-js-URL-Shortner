import React, { Component } from "react";
class Result extends Component {
  state = {
    copy: "Copy",
  };
  handleClick = () => {
    setTimeout(() => this.setState({ copy: "Copied!" }), 100);
    navigator.clipboard.writeText(this.props.finalUrl);
    setTimeout(() => this.setState({ copy: "Copy" }), 1000);
  };

  render() {
    return (
      <div className="result">
        <h2 className="result__initialurl">{this.props.initialUrl}</h2>
        <div className="result__result">
          <h2 className="result__finalurl">{this.props.finalUrl}</h2>
          <button className="btn btn__square" onClick={this.handleClick}>
            {this.state.copy}
          </button>
        </div>
      </div>
    );
  }
}

export default Result;
