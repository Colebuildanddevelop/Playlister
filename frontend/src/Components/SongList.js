import React from "react";
import Table from "react-bootstrap/Table";

export default class SongList extends React.Component {
  render() {
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Artist</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {this.props.songs.map((song, idx) => {
              return (
                <tr onClick={() => this.props.setSong(song.video_id)}>
                  <td>{song.name}</td>
                  <td>{song.artist}</td>
                  <td>{song.genre}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
