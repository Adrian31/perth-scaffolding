import React, { Component } from 'react';
import Nav from '../components/Nav.js';

class Header extends Component {
  render() {
    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-4 logo-contact">
              <img className="img-responsive" alt="logo" src="images/logo.png"/> 
            </div>

            <div className="col-md-4 offset-md-4 contact-details-header">
             <span>Speak with us today: (08) 9417 2474</span>
            </div>
          </div>
      	</div>
      	<div>
          <Nav>
      	 </Nav>
        </div>
      </div>
    );
  }
}

export default Header;