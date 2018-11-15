import React, { Component } from 'react';
import Nav from '../components/Nav.js';

class Header extends Component {
  render() {
    return (
      <div className="App">
      	<img src="./public/images/logo.png"/> 
      	<h1> This is my header</h1>
      	<Nav>
      	</Nav>
      </div>
    );
  }
}

export default Header;