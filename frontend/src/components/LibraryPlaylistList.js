import React from 'react';
import LibraryPlaylistCard from './LibraryPlaylistCard'
import Button from "react-bootstrap/Button";

class LibraryPlaylistList extends React.Component{
    render(){
        console.log(this.props)
        if (this.props.playlists == null){
            return<h2>hello</h2>
        }   
        return(
            <div>
                 <div id="child-middle">
               
            
                  </div>      
            <div id="child-left">
                  <h2>My Library</h2>
                    {this.props.playlists.map(playlist => {
                    return(<LibraryPlaylistCard  playlist={playlist}/>)
                })}
            </div>     
            </div>              
        )
    }
}

export default LibraryPlaylistList;