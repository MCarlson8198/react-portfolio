import React, { Component } from 'react';

class WeatherData extends Component {
  constructor(props){
    super(props);
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(){
    const name = this.refs.cityName.value;
    this.props.onClick(name);
    this.refs.cityName.value = '';
  }

  onKeyPress = (event) => {
  if(event.key === 'Enter'){
    const name = this.refs.cityName.value;
    this.props.onClick(name);
    this.refs.cityName.value = '';
  }
}

  render(){
    return(
      <div id="searchBarLocalWeather">
        <div id="inputBarLocalWeather">
        <input
          onKeyPress={this.onKeyPress}
          placeholder="Enter City, State (ex: Portland, OR)"
          className="form-group text-center form-control"
          id="cityNameLocalWeather"
          ref="cityName"
          /><br />
      </div>
        <button
          onClick={this.getWeather}
          className="btn btn-primary"
          >Get Weather</button>
      </div>
    );
  }
}

export default WeatherData;
