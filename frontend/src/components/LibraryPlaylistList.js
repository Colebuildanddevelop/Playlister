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
                  
                    {this.props.videos.map(video => {
                    return(<li><LibraryPlaylistCard video={video}/></li>)
                })}
            

            </div>   
               
        )
    }
}

export default LibraryPlaylistList;