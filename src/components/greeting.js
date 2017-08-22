import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  render(){
    return (
      <div id="greeting-body">
        <div className="container jumbotron grey-background">
          <h3 className="greeting-text greeting-text-upper">Welcome to my React showcase.</h3>
          <h4 className="greeting-text">This single page app is a sampling of skills I have learned in React. I continually update this worskspace with new projects.</h4>
            <h5 className="greeting-text greeting-subtitle">Scroll down to preview projects.</h5>
        <div className="card-deck">
          <div className="card" >
            <Link exact activeClassName="active" to='/LocalWeather'><img className="card-img-top" src="http://visionsmithstudio.com/wp-content/uploads/2017/08/LocalWeather.png" alt="" /></Link>
            <div className="card-block">
              <Link exact activeClassName="active" to='/LocalWeather'><h4 className="card-title">Local Weather</h4></Link>
              <p className="card-text">Get the current weather for any US city displayed with animated icons.</p>
            </div>
          </div>
          <div className="card">
            <Link exact activeClassName="active" to='/YT'><img className="card-img-top" src="http://visionsmithstudio.com/wp-content/uploads/2017/08/yt-viewer.png" alt="" /></Link>
            <div className="card-block">
              <Link exact activeClassName="active" to='/YT'><h4 className="card-title">Youtube Viewer</h4></Link>
              <p className="card-text">Search for anything on Youtube with this API call.</p>
            </div>
          </div>
        </div>
        <div className="card-deck card-below">
          <div className="card">
            <Link exact activeClassName="active" to='/ToDo'><img className="card-img-top" src="http://visionsmithstudio.com/wp-content/uploads/2017/08/listapp.png" alt="" /></Link>
            <div className="card-block">
              <Link exact activeClassName="active" to='/ToDo'><h4 className="card-title">List App</h4></Link>
              <p className="card-text">Add/Delete Items from a simple list app.</p>
            </div>
          </div>
          <div className="card">
            <Link exact activeClassName="active" to='/Translate'><img className="card-img-top" src="http://visionsmithstudio.com/wp-content/uploads/2017/08/translator-2.png" alt="" /></Link>
            <div className="card-block">
              <Link exact activeClassName="active" to='/Translate'><h4 className="card-title">Word Translator</h4></Link>
              <p className="card-text">Translate words or phrases from english into a number of languages!</p>
            </div>
          </div>
        </div>
        <div id="LocalWeatherCard" className="card-deck card-below">
          <div className="card">
            <Link exact activeClassName="active" to='/Weather'><img className="card-img-top" src="http://visionsmithstudio.com/wp-content/uploads/2017/08/weather-2.png" alt="" /></Link>
            <div className="card-block">
              <Link exact activeClassName="active" to='/Weather'><h4 className="card-title">Weather Forecast</h4></Link>
              <p className="card-text">Enter in the name of any US city, and get a 5-day forecast with a GoogleMap.</p>
            </div>
          </div>
          <div className="card" id="invisible">
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Greeting;
