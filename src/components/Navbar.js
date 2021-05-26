import React, { Component } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import logo from "../images/logo.svg";
class Navbar extends Component {
  state = {
    active: false,
  };

  handleClick = () =>
    this.setState({
      active: !this.state.active,
    });

  render() {
    return (
      <nav className="nav">
        <Link className="nav__logo" exact to="/">
          <img src={logo} alt="nav-logo" />
        </Link>

        <div className={this.state.active ? "nav__left activee" : "nav__left"}>
          <Link className="nav__link" exact to="/">
            Features
          </Link>
          <Link className="nav__link" exact to="/">
            Pricing
          </Link>
          <Link className="nav__link" exact to="/">
            Resources
          </Link>

          <Link className="nav__link" exact to="/">
            Login
          </Link>
          <Buttons
            type="round"
            size={window.innerWidth < 720 ? "1.5rem 5em" : "1rem 3rem"}
            text="Sign Up"
          />
        </div>
        <Link
          className="nav__hamburger"
          exact
          to="/"
          onClick={this.handleClick}
        >
          <i className={this.state.active ? "fa fa-times" : "fa fa-bars"}></i>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
