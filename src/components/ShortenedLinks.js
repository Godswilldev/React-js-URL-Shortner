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
  //   copy = () => navigator.clipboard.writeText(this.state.finalUrl);

  copy = (id) => {
    this.state.links.find((l) => l.id === id);
  };
  render() {
    return (
      <div>
        <Form createLinks={this.createLinks} />
        {this.state.links.map((link) => (
          <Result
            key={link.id}
            initialUrl={link.initialUrl}
            finalUrl={link.finalUrl}
            copy={() => this.copy}
          />
        ))}
      </div>
    );
  }
}

export default ShortenedLinks;
