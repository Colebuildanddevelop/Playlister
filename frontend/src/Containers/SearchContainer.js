import React from "react";
import SearchBar from "../Components/SearchBar.js";
import VideoList from "../Components/VideoList";

export default class SearchContainer extends React.Component {
  render() {
    return (
      <div>
        <SearchBar changeTerm={this.props.changeTerm} />
        <VideoList videos={this.props.videos} />
      </div>
    );
  }
}
