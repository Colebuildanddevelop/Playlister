import React from "react";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";

class LibraryPlaylistCard extends React.Component {
  render() {
    const embedUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.video.snippet.title}</Card.Title>
            <iframe src={embedUrl} width="250" />
            {/* <Button>Edit</Button> */}
          </Card.Body>
        </Card>

        {/* <h4>{this.props.video.snippet.title}</h4>
        <iframe src={embedUrl} /> */}
      </div>
    );
  }
}
export default LibraryPlaylistCard;
