import React, { Component } from "react";
import st1 from "../images/icon-brand-recognition.svg";
import st2 from "../images/icon-detailed-records.svg";
import st3 from "../images/icon-fully-customizable.svg";
class Statistics extends Component {
  render() {
    return (
      <div className="statistics">
        <div className="gregg"></div>
        <div className="hero__text">
          <h6 className="hero__text--header">Advanced Statistics</h6>
          <p className="hero__text--paragraph">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
        </div>
        <div className="statistics__content">
          <div className="stat">
            <div className="stat__img">
              <img src={st1} alt="icon brand recognition" />
            </div>

            <div className="stat__text">
              <h2>Brand recognition</h2>
              <p>
                Boost your brand recognition with <br /> each click. Generic
                links don’t mean a <br /> thing. Branded links help instil{" "}
                <br />
                confidence in your content.
              </p>
            </div>
          </div>
          <div className="stat">
            <div className="stat__img">
              <img src={st2} alt="icon brand recognition" />
            </div>

            <div className="stat__text">
              <h2>Detailed Records</h2>
              <p>
                Gain insights into who is clicking your <br />
                links. Knowing when and where
                <br /> people engage with your content <br />
                helps inform better decisions.
              </p>
            </div>
          </div>
          <div className="stat">
            <div className="stat__img">
              <img src={st3} alt="icon brand recognition" />
            </div>

            <div className="stat__text">
              <h2>Fully Customizable</h2>
              <p>
                Improve brand awareness and <br />
                content discoverability through
                <br /> customizable links, supercharging
                <br /> audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
