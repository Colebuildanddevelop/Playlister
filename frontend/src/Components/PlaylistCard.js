import React from "react";
import Card from "react-bootstrap/Card";

export default class PlaylistCard extends React.Component {
  render() {
    const { playlist } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{playlist.title}</Card.Title>
            <Card.Text>Playlist's songs go here</Card.Text>
          </Card.Body>
          <Card.Footer>Like goes here</Card.Footer>
        </Card>
      </div>
    );
  }
}
