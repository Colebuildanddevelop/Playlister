import React from "react";
import PlaylistList from "../Components/PlaylistList.js";

export default class CategoryContainer extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/playlists", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          playlists: data,
        })
      );
  }
  render() {
    return (
      <div>
        <PlaylistList playlists={this.state.playlists} />
      </div>
    );
  }
}
