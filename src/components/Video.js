import React, { Component } from 'react'
export default class Video extends Component {

  selectVideo = (videoIdObj, onVideoSelected) => {
    onVideoSelected(videoIdObj.videoId);
  }

  render() {
    return (
      <div className="video"
        onClick={() => this.selectVideo(this.props.id, this.props.onVideoSelected)}>
        <img src={this.props.snippet.thumbnails.high.url} alt=""/>
        <p>{this.props.snippet.title}</p>
      </div>
    )
  }
}
