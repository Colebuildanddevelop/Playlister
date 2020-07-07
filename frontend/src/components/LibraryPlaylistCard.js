import React from 'react';

class LibraryPlaylistCard extends React.Component{
    render(){
        
        const embedUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
       
        return(
            <div>  
             
                {this.props.video.snippet.title}
                <iframe src={embedUrl} />
        
            </div>
           
        )
    }
}
export default LibraryPlaylistCard;