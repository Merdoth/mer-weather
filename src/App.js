import React, { Component } from 'react';
import WeatherList from './Components/WeatherList';                           
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <WeatherList header={"Weather Card"}/>
        </div>
    );
  }
}

export default App;
