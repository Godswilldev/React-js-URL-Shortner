import React, { Component } from "react";
import Buttons from "./Buttons";
import uuid from "uuid/v4";
import axios from "axios";

class Form extends Component {
  state = {
    url: "",
    errorMsg: "",
    finalUrl: "",
    loading: false,
  };

  isValidUrl = () => {
    try {
      new URL(this.state.url);
    } catch (e) {
      return false;
    }
    return true;
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.isValidUrl()) {
      this.setState({
        errorMsg: "Please enter a valid URL",
      });
      return;
    } else {
      this.setState({
        loading: true,
      });
      this.getShortURl();
    }
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value.trim(),
    });
  };
  getShortURl = async () => {
    try {
      let { data } = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${this.state.url}`
      );
      this.props.createLinks({
        id: uuid(),
        initialUrl: data.result.original_link,
        finalUrl: data.result.short_link2,
      });
      this.setState({
        url: "",
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return this.state.loading ? (
      <div className="loader">
        <div className="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    ) : (
      <div className="form__background">
        <form onSubmit={this.handleSubmit} className="form">
          <input
            className={
              this.state.errorMsg === "" ? "form__input" : "error form__input"
            }
            type="text"
            name="url"
            id="url"
            placeholder="Shorten an Link Here..."
            value={this.state.url}
            onChange={this.handleChange}
          />
          <p className="form__error"> {this.state.errorMsg} </p>
          <Buttons type="square" text="Shorten it" size="3rem 6rem" />
        </form>
      </div>
    );
  }
}

export default Form;
