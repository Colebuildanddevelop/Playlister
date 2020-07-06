import React from "react";
import Button from "react-bootstrap/Button";

export default class VideoTile extends React.Component {
  state = {
    myPlaylists: [],
  };

  handleClick = (song) => {
    console.log(song);
    this.setState({
      myPlaylists: [...this.state.myPlaylists, song],
    });
  };
  render() {
    console.log(this.state.myPlaylists);
    return (
      <div>
        <Button variant="primary" onClick={this.handleClick}>
          Add to Playlist
        </Button>
      </div>
    );
  }
}
