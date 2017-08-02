import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Title from './title';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="weather-main">
        <Title />
        <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;
