import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LightSwitch from './components/LightSwitch'
import Title from './components/Title';
import UserBoard from './components/UserBoard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <main>
        <Title content="Some other text" />
        <LightSwitch />
        <UserBoard />
      </main>
      </div>
    );
  }
}

export default App;
