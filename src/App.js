import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import ShortenedLinks from "./components/ShortenedLinks";
import Boost from "./components/Boost";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Hero />
        <ShortenedLinks />
        <Statistics />
        <Boost />
      </div>
    );
  }
}

export default App;
