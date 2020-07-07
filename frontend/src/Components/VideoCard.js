import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

export default class VideoCard extends React.Component {
  state = {
    myPlaylists: [],
    show: false,
  };

  //   handleClick = (song) => {
  //     // console.log(song);
  //     this.setState({
  //       myPlaylists: [...this.state.myPlaylists, song],
  //     });
  //   };

  handleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const { video } = this.props;
    const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{video.snippet.title}</Card.Title>

            <iframe src={embedUrl} width="250" />
            {/* <Button variant="primary" onClick={() => this.handleClick(video)}> */}
            <Button variant="primary" onClick={() => this.handleModal()}>
              Add to a Playlist
            </Button>
          </Card.Body>
        </Card>
        <Modal show={this.state.show}>
          <Modal.Header closeButton onClick={() => this.handleModal()}>
            <Modal.Title>Add Song To a Playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Select the Playlist you want to add this song to.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.handleModal()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
