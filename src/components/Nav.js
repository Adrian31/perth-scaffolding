// eslint-disable-next-line
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Slider from '../components/Slider.js';
import Home from '../components/Home.js';
function Nav () {

  return (
    <Router>
      <div> 
        <nav className="navbar navbar-expand-lg navbar-light text-center">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li  className="nav-item menu-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li  className="nav-item menu-item">
                <Link className="nav-link" to="/about-us">About Us</Link>
              </li>
              <li  className="nav-item menu-item">
                <Link className="nav-link" to="/industrial">Industrial</Link>
              </li>
              <li  className="nav-item menu-item">
                <Link className="nav-link" to="/residential">Residential</Link>
              </li>
              <li  className="nav-item menu-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li  className="nav-item menu-item">
                <Link className="nav-link" to="/free-quote">Free Quote</Link>
              </li>
              <li  className="nav-item menu-item">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>  
        </nav>

         <Route exact path="/" component={Homes} />
         <Route exact path="/about-us" component={AboutUs}/>
         <Route exact path="/industrial" component={Industrial} />
         <Route exact path="/residential" component={Residential} />
         <Route exact path="/projects" component={Projects} />
         <Route exact path="/free-quote" component={FreeQuote} />
         <Route exact path="/contact-us" component={ContactUs} />
       </div>
    </Router>
  )
}

function Homes() {
  return (
    <Home></Home>
  );
}
function AboutUs() {
  return (
    <div className="container">
      <h2>About</h2>
    </div>
  );
}
function Industrial() {
  return (
    <div className="container">
      <h2>Industrial</h2>
    </div>
  );
}
function Residential() {
  return (
    <div className="container">
      <h2>Residential</h2>
    </div>
  );
}
function Projects() {
  return (
    <div className="container">
      <h2>Projects</h2>
    </div>
  );
}
function FreeQuote() {
  return (
    <div className="container">
      <h2>Free Quote</h2>
    </div>
  );
}
function ContactUs() {
  return (
    <div className="container">
      <h2>Contact Us</h2>
    </div>
  );
}
export default Nav;




