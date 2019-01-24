import React, { Component } from 'react';
import Nav from '../components/Nav.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  render() {
    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-4 logo-contact">
              <img alt="Logo" className="img-responsive" src={require('../images/logo.png')} /> 
            </div>

            <div className="col-md-4 offset-md-4 contact-details-header">
              <div aria-label="Our Email Address" class="business-details__email">
                <a href="mailto:info@perthscaffolding.com.au">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <FontAwesomeIcon icon="spinner" />
                  <span>Email Us</span>
                </a>
              </div>
              <a>Email Us</a>
              <span>Speak with us today: <span className="ps-orange contact-number">(08) 9417 2474</span> </span>
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