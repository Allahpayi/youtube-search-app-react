import React, { Component } from 'react'
export default class VideoPlayer extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          {
            !this.props.videoId ? <p className="video-player-title">Search for a video</p> :
              <div className="video-player">
                <iframe
                  title={this.props.videoId}
                  className="video-iframe"
                  src={`https://www.youtube.com/embed/${this.props.videoId}`}
                />
              </div>
          }
        </div>
      </div>
    )
  }
}
