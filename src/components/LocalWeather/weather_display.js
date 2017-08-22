import React, { Component } from 'react';


class WeatherDisplay extends Component {

  render(){
    return(
      <div>
        <br />
        <p className="weatherLabelLocalWeather">Current weather for</p> <p className="weatherCityLocalWeather">{this.props.name}</p><br/>
      </div>
    );
  }
}

export default WeatherDisplay;
