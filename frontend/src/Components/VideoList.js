import React from "react";
import VideoCard from "./VideoCard";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

export default class VideoList extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.props.videos.map((video) => (
              <VideoCard
                userPlaylists={this.props.userPlaylists}
                video={video}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
