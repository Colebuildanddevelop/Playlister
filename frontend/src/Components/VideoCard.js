import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
// import Dropdown from "react-bootstrap/Dropdown";

export default class VideoCard extends React.Component {
  state = {
    show: false,
  };

  handleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  saveSong = (e) => {
    fetch("http://localhost:3000/api/v1/songs", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: this.props.video.snippet.title,
        artist: this.props.video.snippet.channelTitle,
        video_id: this.props.video.id.videoId,
        playlist_id: this.state.playlist_id,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Added song to playlist");
        this.handleModal();
      });
  };

  handleChange = (e) => {
    e.persist();
    console.log(e);
  };

  render() {
    console.log(this.state);
    const { video } = this.props;
    const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{video.snippet.title}</Card.Title>

            <iframe src={embedUrl} width="250" />
            <Button variant="primary" onClick={this.handleModal}>
              Add to a Playlist
            </Button>
          </Card.Body>
        </Card>
        <Modal show={this.state.show}>
          <Modal.Header closeButton onClick={this.handleModal}>
            <Modal.Title>Add Song To a Playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Select the Playlist you want to add this song to.
            <label>
              <select
                onChange={(e) =>
                  this.setState({ playlist_id: e.currentTarget.value })
                }
              >
                <strong>Your Playlists</strong>
                <option selected disabled>
                  choose a playlist...
                </option>
                {this.props.userPlaylists.map((playlist) => {
                  return <option value={playlist.id}>{playlist.title}</option>;
                })}
              </select>
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModal}>
              Close
            </Button>
            <Button onClick={this.saveSong} variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
