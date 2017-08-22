import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Greeting from './components/greeting';
import Header from './components/header';
import YTViewer from './components/YT-Viewer/yt-viewer';
import ToDo from './components/To-Do/todo';
import Weather from './components/Weather/components/index';
import Translator from './components/Translator/index';
import CurrentWeather from './components/LocalWeather/weather_main';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route component={Header} />
          <Route component={Nav} />
          <Route exact path='/' component={Greeting} />
          <Route path='/YT' component={YTViewer} />
          <Route path='/Weather' component={Weather} />
          <Route path='/ToDo' component={ToDo} />
          <Route path='/Translate' component={Translator} />
          <Route path='/LocalWeather' component={CurrentWeather} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
