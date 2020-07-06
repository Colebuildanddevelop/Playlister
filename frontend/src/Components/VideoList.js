import React from "react";
import VideoCard from "./VideoCard";

export default class VideoList extends React.Component {
  render() {
    return (
      <div>
        <h1>Video List</h1>
        {this.props.videos.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    );
  }
}
