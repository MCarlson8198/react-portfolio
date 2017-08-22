import React, { Component } from 'react';
import Clear from './icons/animated-icons/day.svg';
import Rain from './icons/animated-icons/rainy-6.svg';
import Drizzle from './icons/animated-icons/rainy-1.svg';
import Snowy from './icons/animated-icons/snowy-6.svg';
import Thunderstorm from './icons/animated-icons/thunder.svg';
import Apocalypse from './icons/animated-icons/weather.svg';
import Clouds from './icons/animated-icons/cloudy-day-3.svg';
import Mist from './icons/animated-icons/cloudy.svg';

class WeatherIcon extends Component {
  constructor(props){
    super(props);
    this.state= {
      logo: '',
      back: ''
    };
  }

  componentWillReceiveProps(newProps){
    console.log(newProps.iconID);
    let newIcon = newProps.iconID;
      switch (newIcon) {
        case 200:
        case 201:
        case 210:
        case 202:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
          this.setState({
            logo: Thunderstorm
          });
          this.props.passBack('ThunderstormImg');
          break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
          this.setState({
            logo: Drizzle
          });
          this.props.passBack('DrizzleImg');
        break;
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
          this.setState({
            logo: Rain
          });
          this.props.passBack('RainImg');
          break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
          this.setState({
            logo: Snowy
          });
          this.props.passBack('SnowyImg');
          break;
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
          this.setState({
            logo: Mist
          });
          this.props.passBack('MistImg');
          break;
        case 800:
        case 951:
        case 952:
        case 953:
        case 954:
        case 955:
        case 956:
        this.props.passBack('ClearImg');
          this.setState({
            logo: Clear
          });

          break;
        case 801:
        case 802:
        case 803:
        case 804:
          this.setState({
            logo: Clouds
          });
          this.props.passBack('CloudsImg');
          break;
        case 771:
        case 781:
        case 900:
        case 901:
        case 902:
        case 903:
        case 904:
        case 905:
        case 906:
        case 957:
        case 958:
        case 959:
        case 960:
        case 961:
        case 962:
          this.setState({
            logo: Apocalypse
          });
          this.props.passBack('ApocalypseImg');
          break;
        default:
          this.setState({
            logo: Clear
          });
          this.props.passBack('ClearImg');
          break;
      }
}

  render(){
    return(
      <div>
        <img
          id="weatherIconLocalWeather"
          style={{width: 300, height: 300}}
          src={this.state.logo}
          className="icon-logo"
          alt="logo" />
      </div>
    );
  }
}

export default WeatherIcon;
