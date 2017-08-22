import React, { Component } from 'react';
import './index.css';
import PostsIndex from './components/posts_index';

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
