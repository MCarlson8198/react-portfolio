import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render(){
    return(
      <div>
        <nav className="nav navbar-default ">
          <div className="container-fluid ">
            <div className="navbar-header ">
              <button type="button" className=" navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav-list">
                  <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/YT'>Youtube Viewer</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Weather'>Weather Forecast</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/ToDo'>To-Do List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Translate'>Word Translator</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/LocalWeather'><strong id="newItem">*NEW*</strong> Local Weather</Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
