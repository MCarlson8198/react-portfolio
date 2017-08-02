import React, { Component } from 'react';
import './index.css';
import PostsIndex from './components/posts_index';

{/*
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
  */}




class Blog extends Component {
  render(){
    return (
      <div>
      <PostsIndex />
      </div>
    );
  }
}
export default Blog;
