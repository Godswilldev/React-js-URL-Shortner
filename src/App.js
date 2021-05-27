import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortenedLinks from "./components/ShortenedLinks";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Hero />
        <ShortenedLinks />
      </div>
    );
  }
}

export default App;
