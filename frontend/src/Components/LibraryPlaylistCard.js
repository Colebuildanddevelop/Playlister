
import React from "react";
//import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class LibraryPlaylistCard extends React.Component {  


  render() {
   

    return (
        <div id="child-left">
        <Modal.Dialog>
         <Modal.Header>
    <Modal.Title>Playlist Name: {this.props.playlist.title}</Modal.Title>
       </Modal.Header>

       <Modal.Body>
        <h4>Songs</h4>
            <ul>
               <li>{this.props.playlist.songs[0].name}</li>
               <li>{this.props.playlist.songs[1].name}</li>
               <li>{this.props.playlist.songs[2].name}</li>
               <li>{this.props.playlist.songs[3].name}</li>
               <li>{this.props.playlist.songs[4].name}</li>
            </ul>
       </Modal.Body>

       <Modal.Footer>
        <Button  variant="secondary">Edit</Button>
        <Button variant="primary">Save changes</Button>
        </Modal.Footer>
       </Modal.Dialog>
       </div>    
    );
  }
}
export default LibraryPlaylistCard;