import React from "react";
import LibraryPlaylistCard from "./LibraryPlaylistCard";
import Button from "react-bootstrap/Button";

class LibraryPlaylistList extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.videos == null) {
      return <h2>hello</h2>;
    }

    return (
      <div>
        <div id="child-middle">
          <Button variant="secondary">Create Playlist</Button>{" "}
        </div>

        <div id="child-left">
          <h2>My Library</h2>
          {this.props.videos.map((video) => {
            return (
              <LibraryPlaylistCard
                changeTitle={this.props.changeTitle}
                video={video}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default LibraryPlaylistList;
