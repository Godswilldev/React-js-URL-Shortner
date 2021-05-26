import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div>
        <button
          className={
            this.props.type === "square" ? "btn btn__square" : "btn btn__round"
          }
          style={{
            padding: this.props.size,
          }}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Buttons;
