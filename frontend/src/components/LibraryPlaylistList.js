import React from "react";
import LibraryPlaylistCard from "./LibraryPlaylistCard";

class LibraryPlaylistList extends React.Component {
  state = {
    currentSongId: "",
  };

  setSong = (songId) => {
    console.log(songId);
    this.setState({
      currentSongId: songId,
    });
  };

  render() {
    console.log(this.props);
    if (this.props.playlists == null) {
      return <h2>Loading...</h2>;
    }
    const embedUrl = `https://www.youtube.com/embed/${this.state.currentSongId}`;
    return (
      <div>
        <div id="child-left">
          <h2>My Library</h2>
          {this.props.playlists.map((playlist) => {
            return (
              <LibraryPlaylistCard
                playlist={playlist}
                routeProps={this.props.routeProps}
                removePlaylist={this.props.removePlaylist}
                removeSong={this.props.removeSong}
                setSong={this.setSong}
              />
            );
          })}
        </div>
        <div style={{ position: "fixed", top: "100px", right: "50px" }}>
          <iframe src={embedUrl} width="800" height="400" />
        </div>
      </div>
    );
  }
}

export default LibraryPlaylistList;
