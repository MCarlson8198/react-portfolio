import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    return(
      <ul className="nav navbar">
        <li>
          <Link exact activeClassName="active" to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to='/YT'>
            Youtube Viewer
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to='/Weather'>
            Weather App
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to='/ToDo'>
            To-Do List
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to='/Translate'>
            Word Translator
          </Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
