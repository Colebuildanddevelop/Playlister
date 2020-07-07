import React from "react";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => this.props.changeTerm(e.target.value)}
        />
      </div>
    );
  }
}
