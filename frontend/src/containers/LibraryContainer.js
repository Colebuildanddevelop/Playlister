import React from "react";
import LibraryPlaylistList from "../Components/LibraryPlaylistList";
import ApiKey from "../keys";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class LibraryContainer extends React.Component {
  state = {
    playlists: null,
    searchTerm: "jazz",
    title: "",
    show: false,
    categories: null,
    isLoading: true,
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        this.setState({
          playlists: user.playlists,
        });
      });

    fetch("http://localhost:3000/api/v1/categories", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          categories: data,
          isLoading: false,
        })
      );
  }

  createPlaylist = () => {
    fetch("http://localhost:3000/api/v1/playlists", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.title,
        category_id: this.state.categorySelected,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Playlist has been created");
        this.props.routeProps.history.push("/discover");
      });
  };

  removePlaylist = (playlistId) => {
    this.setState({
      playlists: this.state.playlists.filter(
        (playlist) => playlist.id !== playlistId
      ),
    });
  };

  removeSong = (songId, playlistId) => {
    // find playlist in this.state.playlists
    let playlistToUpdate = this.state.playlists.find(
      (playlist) => playlist.id === playlistId
    );
    // find song to remove in the found playlist
    // remove the song
    let updatedPlaylistSongs = playlistToUpdate.songs.filter((songObj) => {
      return songObj.id !== parseInt(songId);
    });
    console.log(updatedPlaylistSongs);
    // update this.state.playlists with the updated playlist (the playlist that we removed the song from)
    let updatedPlaylist = playlistToUpdate;
    updatedPlaylist.songs = updatedPlaylistSongs;
    const col = this.state.playlists;
    const i = col.indexOf(playlistToUpdate);
    this.setState({
      playlists: [...col.slice(0, i), updatedPlaylist, ...col.slice(i + 1)],
    });
    // this.setState({
    //   playlists: []
    // })
  };

  handleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    console.log(this.props);
    if (this.state.isLoading) return <h1>Loading...</h1>;
    return (
      <div>
        <Button onClick={this.handleModal}>Create a Playlist</Button>
        <Modal show={this.state.show}>
          <Modal.Header closeButton onClick={() => this.handleModal()}>
            <Modal.Title>Create Playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Select the Playlist you want to add this song to.
            <label>
              <label>Name your playlist</label>
              <input
                type="text"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
              <select
                onChange={(e) =>
                  this.setState({ categorySelected: e.currentTarget.value })
                }
              >
                <strong>Your Playlists</strong>
                <option selected disabled>
                  choose a category...
                </option>
                {this.state.categories.map((category) => {
                  return <option value={category.id}>{category.name}</option>;
                })}
              </select>
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>
              Close
            </Button>
            <Button onClick={this.createPlaylist} variant="primary">
              Create!
            </Button>
          </Modal.Footer>
        </Modal>
        <LibraryPlaylistList
          routeProps={this.props.routeProps}
          playlists={this.state.playlists}
          removePlaylist={this.removePlaylist}
          removeSong={this.removeSong}
        />
      </div>
    );
  }
}
export default LibraryContainer;
