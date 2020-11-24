import React, { Component } from 'react'
import './App.css';
import Search from './components/Search';
import youtubeApi from './api/youtube';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer'

export default class App extends Component {
  state = {
    videoMetaInfo: [],
    selectedVideoId: null
  }
  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId
    })
  }
  onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    })
    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
          <h1 className="title">Youtube Search App</h1>
            <Search onSearch={this.onSearch} />
            <VideoPlayer videoId={this.state.selectedVideoId} />
          </div>
          <div className="col-md-3">
            <VideoList onVideoSelected={this.onVideoSelected}
              data={this.state.videoMetaInfo}
            />
          </div>
        </div>
      </div>
    )
  }
}
