import React, { Component } from "react";
import { NavLink, Link, Route } from "react-router-dom";
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
        <NavLink className="nav__logo" exact to="/">
          <img src={logo} alt="nav-logo" />
        </NavLink>

        <div className={this.state.active ? "nav__left activee" : "nav__left"}>
          <NavLink className="nav__link" exact to="/">
            Features
          </NavLink>
          <NavLink className="nav__link" exact to="/">
            Pricing
          </NavLink>
          <NavLink className="nav__link" exact to="/">
            Resources
          </NavLink>

          <NavLink className="nav__link" exact to="/">
            Login
          </NavLink>
          <Buttons
            type="round"
            size={window.innerWidth < 720 ? "1.5rem 5em" : "1rem 3rem"}
            text="Sign Up"
          />
        </div>
        <NavLink
          className="nav__hamburger"
          exact
          to="/"
          onClick={this.handleClick}
        >
          <i class={this.state.active ? "fa fa-times" : "fa fa-bars"}></i>
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
