import React from "react";
import PlaylistList from "../Components/PlaylistList";

class PlaylistContainer extends React.Component {
  state = {
    playlists: [],
    currentSongId: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/playlists", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((playlists) => {
        this.setState({
          playlists: playlists,
        });
      });
  }

  setSong = (songId) => {
    console.log(songId);
    this.setState({
      currentSongId: songId,
    });
  };

  render() {
    console.log(this.state);
    if (this.state.playlists === null) return <h1>loading</h1>;
    const embedUrl = `https://www.youtube.com/embed/${this.state.currentSongId}`;
    return (
      <div style={{ position: "relative" }}>
        <div>
          <PlaylistList
            playlists={this.state.playlists}
            setSong={this.setSong}
          />
        </div>
        <div className="video-container">
          <iframe src={embedUrl} width="800" height="400" />
        </div>
      </div>
    );
  }
}

export default PlaylistContainer;
