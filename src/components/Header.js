import React, { Component } from 'react';
import Nav from '../components/Nav.js';

class Header extends Component {
  render() {
    return (
      <div className="container header-container">
        <div className="row">
          <div className="col-4">
            <img className="img-responsive" alt="logo" src="images/logo.png"/> 
          </div>

          <div className="col-8">
            <h1> This is my header</h1>
          </div>
        </div>
      	
      	<div className="row">
          <Nav>
      	 </Nav>
        </div>
      </div>
    );
  }
}

export default Header;