import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

export default class LibraryPlaylistCard extends React.Component {
  state = {
    show: false,
    displayTitle: this.props.playlist.title,
    title: this.props.playlist.title,
  };

  handleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleDeleteSong = (e) => {
    const id = e.target.id;
    fetch(`http://localhost:3000/api/v1/songs/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then((obj) => {
        this.props.removeSong(id, this.props.playlist.id);
        console.log(obj);
      });
  };

  handleDeletePlaylist = () => {
    fetch(`http://localhost:3000/api/v1/playlists/${this.props.playlist.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then(() => {
        alert("Playlist deleted");
        this.props.removePlaylist(this.props.playlist.id);
        // console.log(playlist);
      });
  };

  editPlaylist = () => {
    fetch(`http://localhost:3000/api/v1/playlists/${this.props.playlist.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.title,
      }),
    })
      .then((res) => res.json())
      .then((updatedPlaylist) => {
        this.setState({
          displayTitle: updatedPlaylist.title,
        });
        this.handleModal();
      });
  };

  render() {
    console.log(this.state);
    return (
      <div id="child-left">
        <Card style={{ width: "30rem" }} className="library-card">
          <Card.Header className="lib-header">
            <Card.Title>Playlist Name: {this.state.displayTitle}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Song Name</th>
                  <th>Artist</th>
                  <th>Genre</th>
                  <th>Delete Song</th>
                </tr>
              </thead>
              <tbody>
                {this.props.playlist.songs.map((song) => {
                  return (
                    <tr onClick={() => this.props.setSong(song.video_id)}>
                      <td>{song.name}</td>
                      <td>{song.artist}</td>
                      <td>{song.genre}</td>
                      <td>
                        <Button
                          onClick={this.handleDeleteSong}
                          id={song.id}
                          className="delete-btn"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>

          <Card.Footer>
            <Button
              onClick={() => this.props.routeProps.history.push("/discover")}
              className="for-library add-btn"
            >
              Add Songs
            </Button>
            <Button onClick={this.handleModal} className="for-library edit-btn">
              Edit Playlist
            </Button>
            <Button
              className="for-library delete-btn"
              onClick={this.handleDeletePlaylist}
            >
              Delete Playlist
            </Button>
          </Card.Footer>
        </Card>
        <Modal show={this.state.show}>
          <Modal.Header closeButton onClick={() => this.handleModal()}>
            <Modal.Title>Edit Your Playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>
              <label>Rename your playlist</label>
              <input
                type="text"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>
              Close
            </Button>
            <Button onClick={this.editPlaylist} variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
