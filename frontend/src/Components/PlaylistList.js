import React from "react";
import PlaylistCard from "../Components/PlaylistCard.js";

export default class PlaylistList extends React.Component {
  render() {
    return (
      <div>
        {this.props.playlists.map((playlist) => (
          <PlaylistCard playlist={playlist} />
        ))}
      </div>
    );
  }
}
