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
  render() {
    console.log(this.props.match.params.id);
    console.log(this.state.category);

    return (
      <div>
        {this.state.category === null ? (
          <h4>Loading ...</h4>
        ) : (
          <PlaylistList playlists={this.state.category.playlists} />
        )}
      </div>
    );
  }
}
