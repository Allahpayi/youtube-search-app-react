import React, { Component } from 'react'
import Video from "./Video";

export default class VideoList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <h3 className="video-list-title">Other Videos</h3>
            </div>
          </div>
          <div className="row" >
            <div className="col-md-12 oy-s">
              {
                this.props.data.map(({ snippet, id }) => (
                  <Video key={id.videoId} snippet={snippet} id={id} onVideoSelected={this.props.onVideoSelected} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
