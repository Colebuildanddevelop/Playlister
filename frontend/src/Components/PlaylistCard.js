import React from "react";
import Card from "react-bootstrap/Card";
import SongList from "../Components/SongList";

export default class PlaylistCard extends React.Component {
  render() {
    const { playlist } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{playlist.title}</Card.Title>
            <Card.Text>creator: {playlist.created_by}</Card.Text>
            <Card.Text>category: {playlist.category}</Card.Text>
            <SongList songs={playlist.songs} />
          </Card.Body>
          <Card.Footer>likes: {playlist.likes}</Card.Footer>
        </Card>
      </div>
    );
  }
}
