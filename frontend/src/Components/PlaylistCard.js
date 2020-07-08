import React from "react";
import Card from "react-bootstrap/Card";
import SongList from "../Components/SongList";
import Button from "react-bootstrap/Button";

export default class PlaylistCard extends React.Component {
  state = {
    likes: this.props.playlist.likes,
  };

  handleLike = () => {
    fetch(`http://localhost:3000/api/v1/likes`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        playlist_id: this.props.playlist.id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newLikeVal =
          result.message === "liked playlist"
            ? this.state.likes + 1
            : this.state.likes - 1;
        this.setState({
          likes: newLikeVal,
        });
      });
  };

  render() {
    const { playlist } = this.props;
    return (
      <div>
        <Card style={{ width: "24rem" }}>
          <Card.Body>
            <Card.Title>{playlist.title}</Card.Title>
            <Card.Text>Creator: {playlist.created_by}</Card.Text>
            <Card.Text>Category: {playlist.category}</Card.Text>
            <SongList songs={playlist.songs} setSong={this.props.setSong} />
          </Card.Body>
          <Card.Footer>
            Likes: {this.state.likes}
            <Button onClick={this.handleLike} className="like-btn">
              Like
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
