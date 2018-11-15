import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// class Nav extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn,
//       state: 'menu'
//     }));
//   }

//   render() {

//     return (

//       <nav className="navbar-dark navbar-default navbar-expand-lg bg-dark">
//           <div id="top-menu" className="top-menu navbar-collapse collapse global-navigation">
//             <ul id="menu-top-menu" className="nav navbar-nav">
//               <li onClick={this.handleClick}  className="menu-item"><a href="#">Home</a></li>
//               <li  className="menu-item"><a href="https://www.perthscaffolding.com.au/about-us/">About Us</a></li>
//               <li  className="menu-item"><a href="https://www.perthscaffolding.com.au/industrial/">Industrial</a></li>
//               <li  className="menu-item"><a href="https://www.perthscaffolding.com.au/residential/">Residential</a></li>
//               <li  className="menu-item"><a href="https://www.perthscaffolding.com.au/projects/">Projects</a></li>
//               <li  className="menu-item"><a href="https://www.perthscaffolding.com.au/free-quote/">Free Quote</a></li>
//               <li  className="menu-item"><a href="https://www.perthscaffolding.com.au/contact-us/">Contact Us</a></li>
//             </ul>
//           </div>  
//       </nav>
//     );
//   }
// }


function Nav () {

  return (
    <Router>
      <div>
      <nav className="navbar-dark navbar-default navbar-expand-lg bg-dark">
          <div id="top-menu" className="top-menu navbar-collapse collapse global-navigation">
            <ul id="menu-top-menu" className="nav navbar-nav">
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




