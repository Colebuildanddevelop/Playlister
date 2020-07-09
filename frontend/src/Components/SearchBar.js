import React from "react";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <h2 className="discover-header">
          Search for Songs to Add to Your Playlists
        </h2>
        <div style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            onChange={(e) => this.props.changeTerm(e.target.value)}
          />
        </div>
      </div>
    );
  }
}
