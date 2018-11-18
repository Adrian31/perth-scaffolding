import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Nav () {

  return (
    <Router>
      <div>
        <nav className="nav navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li  className="menu-item">
                <Link to="/">Home</Link>
              </li>
              <li  className="menu-item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li  className="menu-item">
                <Link to="/industrial">Industrial</Link>
              </li>
              <li  className="menu-item">
                <Link to="/residential">Residential</Link>
              </li>
              <li  className="menu-item">
                <Link to="/projects">Projects</Link>
              </li>
              <li  className="menu-item">
                <Link to="/free-quote">Free Quote</Link>
              </li>
              <li  className="menu-item">
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>  
        </nav>

         <Route exact path="/" component={Home} />
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

function Home() {
  return (
    <div> hi </div>
  );
}
function AboutUs() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Industrial() {
  return (
    <div>
      <h2>Industrial</h2>
    </div>
  );
}
function Residential() {
  return (
    <div>
      <h2>Residential</h2>
    </div>
  );
}
function Projects() {
  return (
    <div>
      <h2>Projects</h2>
    </div>
  );
}
function FreeQuote() {
  return (
    <div>
      <h2>Free Quote</h2>
    </div>
  );
}
function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
    </div>
  );
}
export default Nav;




