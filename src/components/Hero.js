import React, { Component } from "react";
import Buttons from "./Buttons";
import HeroImg from "../images/illustration-working.svg";
export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__text--header">
            More than just <br /> shorter links
          </h1>
          <p className="hero__text--paragraph">
            Build your brand’s recognition and get detailed <br /> insights on
            how your links are performing.
          </p>
          <Buttons type="round" size="1.5rem 4rem" text="Get started" />
        </div>
        <div className="hero__im">
          <img className="hero__img" src={HeroImg} alt="illustration-working" />
        </div>
      </div>
    );
  }
}
