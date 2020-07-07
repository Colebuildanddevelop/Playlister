import React from 'react';
import LibraryPlaylistCard from './LibraryPlaylistCard'

class LibraryPlaylistList extends React.Component{
    render(){
        console.log(this.props)
        if (this.props.videos == null){
            return<h2>hello</h2>
        }
     
        return(
            
            <div>
                  <h2>My Library</h2>
                    {this.props.videos.map(video => {
                    return(<LibraryPlaylistCard video={video}/>)
                })}
            

            </div>   
               
        )
    }
}

export default LibraryPlaylistList;