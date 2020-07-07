

import React from "react";
//import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


class LibraryPlaylistCard extends React.Component {
  render() {
    const embedUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
    
        <div id="child-left">
        <Modal.Dialog>
         <Modal.Header closeButton>
    <Modal.Title>{<iframe src={embedUrl} width="250" />}</Modal.Title>
       </Modal.Header>

       <Modal.Body>
        <p>{this.props.video.snippet.title}</p>
       </Modal.Body>

       <Modal.Footer>
        <Button variant="secondary">Edit</Button>
        <Button variant="primary">Save changes</Button>
        </Modal.Footer>
       </Modal.Dialog>
       </div>
       
      
/* 

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.video.snippet.title}</Card.Title>
            <iframe src={embedUrl} width="250" />
            <Button>Edit</Button> 
          </Card.Body>
        </Card> */

      
    
    );
  }
}
export default LibraryPlaylistCard;