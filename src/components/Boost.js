import React, { Component } from "react";
import Buttons from "./Buttons";
class Boost extends Component {
  render() {
    return (
      <div>
        <div className="boost">
          <h1 className="boost__text">Boost Your Links Today</h1>
          <Buttons type="round" size="1.5rem 4rem" text="Get started" />
        </div>
      </div>
    );
  }
}

export default Boost;
