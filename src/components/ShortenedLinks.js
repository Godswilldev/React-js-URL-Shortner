import React, { Component } from "react";
import Result from "./Result";
import Form from "./Form";
class ShortenedLinks extends Component {
  state = {
    links: JSON.parse(window.localStorage.getItem("links") || "[]"),
  };

  createLinks = (link) =>
    this.setState(
      (curState) => ({
        links: [...curState.links, link],
      }),
      () =>
        window.localStorage.setItem("links", JSON.stringify(this.state.links))
    );

  render() {
    return (
      <div>
        <Form createLinks={this.createLinks} />
        {this.state.links.map((link) => (
          <Result
            key={link.id}
            initialUrl={link.initialUrl}
            finalUrl={link.finalUrl}
          />
        ))}
      </div>
    );
  }
}

export default ShortenedLinks;
