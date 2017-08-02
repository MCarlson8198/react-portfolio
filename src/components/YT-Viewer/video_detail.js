import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>;
  }


  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="col-md-8  transparent-background">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="CurrentlyPlaying" className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="video-detail jumbotron">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
