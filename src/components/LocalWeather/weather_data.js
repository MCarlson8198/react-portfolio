import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = 'fa17c1bc142fce85f504b0589a6f8d4e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

class WeatherData extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityID: '',
      weatherData: '',
      temp:'',
      icon: '',
      iconID: '',
      backName: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.passID = this.passID.bind(this);
  }

  componentDidMount(){
    // Consider using geolocation to grab inital location
    var self = this;
    const city = this.props.cityName;
    const url = `${ROOT_URL}&q=${city},us`;
    return axios.get(url)
    .then(function(response) {
      let newTemp = Math.round((((response.data.main.temp) - 273) * 1.8) + 32)
      self.setState({
        temp: newTemp,
        cityID: response.data.name,
        weatherData: response.data.weather[0].description,
        icon: response.data.weather[0].main,
        iconID: response.data.weather[0].id
      });
      if(!response){
        console.log('no response');
      } else if (response){
        console.log(response);
        let catchIconID = response.data.weather[0].id;
        self.passID(catchIconID);
      }
    });
  }

  componentWillReceiveProps(newProps){
    var self = this;
    const city = newProps.cityName;
    const url = `${ROOT_URL}&q=${city},us`;
     axios.get(url)
    .then(function(response) {
      let newTemp = Math.round((((response.data.main.temp) - 273) * 1.8) + 32)
      let newDescription = response.data.weather[0].description;
      let revisedDescription = newDescription.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        self.setState({
        temp: newTemp,
        cityID: response.data.name,
        weatherData: revisedDescription,
        icon: response.data.weather[0].main,
        iconID: response.data.weather[0].id
      });
      if(!response){
        console.log('no response');
      } else if (response){
        console.log(response);
        let catchIconID = response.data.weather[0].id;
        self.passID(catchIconID);
      }
    });
  }

  passID(catchIconID){
    this.props.passID(catchIconID);
  }

  render(){
    return(
      <div>
          <p className="weatherDescriptionLocalWeather">{this.state.weatherData}
          <br />Temp: {this.state.temp} &#8457;</p>
      </div>
    );
  }
}
export default WeatherData;
