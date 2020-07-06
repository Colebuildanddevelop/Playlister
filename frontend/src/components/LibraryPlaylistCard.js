import React from 'react';

class LibraryPlaylistCard extends React.Component{
    render(){
       
        return(
            <div>  
             
                {this.props.video.snippet.title}
                 
        
            </div>
           
        )
    }
}
export default LibraryPlaylistCard;