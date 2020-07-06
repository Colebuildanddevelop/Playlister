import React from 'react';

class PlaylistCard extends React.Component{
    render(){
       
        return(
            <div>  
                <td>
                {this.props.video.snippet.title}
                </td>      
        
            </div>
           
        )
    }
}
export default PlaylistCard;