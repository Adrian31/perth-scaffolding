import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends Component {

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      state: 'menu'
    }));
  }

  render() {
    return (
      <div className="App">
        <Header>

        </Header> 
        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;
