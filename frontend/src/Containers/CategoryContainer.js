import React from "react";
import PlaylistList from "../Components/PlaylistList.js";

export default class CategoryContainer extends React.Component {
  state = {
    category: null,
  };

  componentDidMount() {
    fetch(
      `http://localhost:3000/api/v1/categories/${this.props.match.params.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          category: data,
        })
      );
  }

  setSong = (songId) => {
    console.log(songId);
    this.setState({
      currentSongId: songId,
    });
  };

  render() {
    const embedUrl = `https://www.youtube.com/embed/${this.state.currentSongId}`;
    return (
      <div>
        {this.state.category === null ? (
          <h4>Loading ...</h4>
        ) : (
          <div style={{ position: "relative" }}>
            <div>
              <PlaylistList
                playlists={this.state.category.playlists}
                setSong={this.setSong}
              />
            </div>
            <div style={{ position: "fixed", top: "100px", right: "50px" }}>
              <iframe src={embedUrl} width="800" height="400" />
            </div>
          </div>
        )}
      </div>
    );
  }
}
