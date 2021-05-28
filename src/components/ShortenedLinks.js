import React, { Component } from "react";
import Result from "./Result";
import Form from "./Form";
class ShortenedLinks extends Component {
  state = {
    links: [],
  };

  createLinks = (link) =>
    this.setState((curState) => ({
      links: [...curState.links, link],
    }));

  render() {
    return (
      <div>
        <Form createLinks={this.createLinks} />
        {this.state.links.map((link) => (
          <Result
            key={link.id}
            initialUrl={link.initialUrl}
            finalUrl={link.finalUrl}
            // copy={() => this.copy}
          />
        ))}
      </div>
    );
  }
}

export default ShortenedLinks;
