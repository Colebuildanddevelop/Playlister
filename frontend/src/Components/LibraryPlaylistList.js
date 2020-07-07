<<<<<<< HEAD
import React from 'react';
import LibraryPlaylistCard from './LibraryPlaylistCard'
import Button from "react-bootstrap/Button";

class LibraryPlaylistList extends React.Component{
    render(){
        console.log(this.props)
        if (this.props.videos == null){
            return<h2>hello</h2>
        }
     
        return(
            <div>
                 <div id="child-middle">
                <Button variant="secondary">Create Playlist</Button>{' '}
                  </div> 

                  
            <div id="child-left">
                  <h2>My Library</h2>
                    {this.props.videos.map(video => {
                    return(<LibraryPlaylistCard changeTitle={this.props.changeTitle}  video={video}/>)
                })}
            </div> 
                
            </div>
=======
import React from "react";
import LibraryPlaylistCard from "./LibraryPlaylistCard";
import Button from "react-bootstrap/Button";
>>>>>>> 0715cf47fb64819a37e330fc1d796b8df9c72f4c


<<<<<<< HEAD

           
               
        )
    }
=======
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
>>>>>>> 0715cf47fb64819a37e330fc1d796b8df9c72f4c
}

export default LibraryPlaylistList;