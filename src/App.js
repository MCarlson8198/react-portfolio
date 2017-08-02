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

{/*
import PostsNew from './components/Blog/components/posts_new';
import PostsShow from './components/Blog/components/posts_show';
import promise from 'redux-promise';
import reducers from './components/Blog/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import PostsIndex from './components/Blog/components/posts_index'; */}


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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
