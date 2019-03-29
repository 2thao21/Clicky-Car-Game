import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Try it out!</li>
          <li className="itemCenter">Click an Image to begin!</li>
          <li className="itemRight">Scoreboard: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;