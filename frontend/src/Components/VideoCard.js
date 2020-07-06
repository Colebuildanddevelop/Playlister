import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class VideoCard extends React.Component {
  state = {
    myPlaylists: [],
  };

  handleClick = (song) => {
    console.log(song);
    this.setState({
      myPlaylists: [...this.state.myPlaylists, song],
    });
  };
  render() {
    const { video } = this.props;
    const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{video.snippet.title}</Card.Title>

            <iframe src={embedUrl} />
            <Button variant="primary" onClick={this.handleClick}>
              Add to a Playlist
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
