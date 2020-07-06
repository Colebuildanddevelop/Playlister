import React from "react";
import VideoTile from "./VideoTile";
import Card from "react-bootstrap/Card";

export default class VideoCard extends React.Component {
  render() {
    const { video } = this.props;
    const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{video.snippet.title}</Card.Title>

            <iframe src={embedUrl} />
            <VideoTile />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
