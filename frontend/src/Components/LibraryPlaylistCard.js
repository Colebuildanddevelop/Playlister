import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { remove } from "lodash";

class LibraryPlaylistCard extends React.Component {
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

  render() {
    // console.log(this.props.playlist.id);
    // console.log(this.props.playlist);
    return (
      <div id="child-left">
        <Card style={{ width: "30rem" }}>
          <Card.Header>
            <Card.Title>Playlist Name: {this.props.playlist.title}</Card.Title>
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
                {this.props.playlist.songs.map((song, idx) => {
                  return (
                    // <tr onClick={() => this.props.setSong(song.video_id)}>
                    <tr>
                      <td>{song.name}</td>
                      <td>{song.artist}</td>
                      <td>{song.genre}</td>
                      <td>
                        <Button
                          onClick={this.handleDeleteSong}
                          id={song.id}
                          variant="danger"
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
              variant="success"
            >
              Add Songs
            </Button>
            <Button variant="danger" onClick={this.handleDeletePlaylist}>
              Delete Playlist
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
export default LibraryPlaylistCard;
