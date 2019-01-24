// eslint-disable-next-line
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import NavLink from "./nav_link";
import Home from '../components/Home.js';
function Nav () {

  return (
    <Router>
      <div> 
        <nav className="navbar navbar-expand-lg navbar-light text-center">
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li  className="nav-item menu-item">
                <NavLink className="nav-link" to="/" activeClassName="selected" >Home</NavLink>
              </li>
              <li  className="nav-item menu-item">
                <NavLink className="nav-link" to="/about-us" activeClassName="selected" >About Us</NavLink>
              </li>
              <li  className="nav-item menu-item">
                <NavLink className="nav-link" to="/industrial" activeClassName="selected" >Industrial</NavLink>
              </li>
              <li  className="nav-item menu-item">
                <NavLink className="nav-link" to="/residential" activeClassName="selected" >Residential</NavLink>
              </li>
              <li  className="nav-item menu-item">
                <NavLink className="nav-link" to="/projects" activeClassName="selected" >Projects</NavLink>
              </li>
              <li  className="nav-item menu-item">
                <NavLink className="nav-link" to="/free-quote" activeClassName="selected" >Free Quote</NavLink>
              </li>
              <li  className="nav-item menu-item">
                <NavLink className="nav-link" to="/contact-us" activeClassName="selected" >Contact Us</NavLink>
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




