import React from 'react';

class PlaylistCard extends React.Component{
    render(){
       
        return(
            <div>  
             
                {this.props.video.snippet.title}
                 
        
            </div>
           
        )
    }
}
export default PlaylistCard;