import React, { Component } from 'react';
import WeatherData from './weather_data';
import SearchBar from './search_bar';
import WeatherDisplay from './weather_display';
import WeatherIcon from './weather_icon';


class CurrentWeather extends Component {
  constructor(props){
    super(props);
    this.state ={
      name: 'Portland, OR',
      newBack: '',
      iconID: '',
      icon: ''
    };
    this.getName = this.getName.bind(this);
    this.newIcon = this.newIcon.bind(this);
    this.newBackground = this.newBackground.bind(this);
  }

  getName(newName){
    this.setState({
      name: newName
    });
  }

newBackground(backgroundUpdate){
  if(backgroundUpdate === this.state.newBack){
  } else {
    this.setState({
      newBack: backgroundUpdate
    });
  }

}

newIcon(iconNumber){
  if(iconNumber === this.state.iconID){
  } else {
    this.setState({
      iconID: iconNumber
    });
  }
}

  render() {
    return(
      <div className="container">
      <div id="mainLocalWeather">
        <br />
          <h3>Local Weather App</h3>
        <br />
        <SearchBar onClick={this.getName}/>
        <div  id="backgroundImageLocalWeather" className={this.state.newBack}>
          <div id="plateLocalWeather">
            <div id="mealLocalWeather">
              <WeatherDisplay name={this.state.name}/>
              <br />
              <WeatherIcon iconID={this.state.iconID} passBack={this.newBackground} />
              <WeatherData passID={this.newIcon} cityName={this.state.name}/>
              </div>
          </div>
        </div>
        <p>These awesome icons were made by <a target="_blank" href="https://www.amcharts.com/free-animated-svg-weather-icons/" rel="noopener noreferrer">amCharts</a></p>
      </div>
    </div>
    );
  }
}

export default CurrentWeather;
