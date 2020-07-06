import React from "react";
import SearchBar from "../Components/SearchBar.js";

export default class SearchContainer extends React.Component {
  render() {
    return (
      <div>
        <SearchBar changeTerm={this.props.changeTerm} />
      </div>
    );
  }
}
