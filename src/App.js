import React, { Component } from 'react';
import Header from './components/Header'
import Special from './components/Special'
import Slider from './components/Slider'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Slider />
          <Special />
      </div>
    );
  }
}

export default App;
