import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
const API_KEY = 'AIzaSyDKRXFuFyz03sGRna3ur-psLmWVkj1gC2s';

class YTViewer extends Component {
    constructor(props){
      super(props);
      this.state = {
        videos: [],
        selectedVideo: null
       };
       this.videoSearch('nick sibicky go lecture #52');
    }

    videoSearch(term){
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
    }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div id="ytMain">
        <div className="yt-greeting">
          <h2>Youtube Viewer</h2>
          <h4>One of my passions is the game Go. <br />Check out some opening theory below, or use this API to search for anything on Youtube.</h4><br />
          </div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
      </div>
    );
  }
}

export default YTViewer;
