import React from 'react';
import PlaylistCard from './PlaylistCard'

class PlaylistList extends React.Component{
    render(){
        console.log(this.props)
        if (this.props.videos == null){
            return<h2>hello</h2>
        }
        return(
         
            <div>
                {this.props.videos.map(video => {return<PlaylistCard video={video}/>})}
            </div>
               
        )
    }
}

export default PlaylistList;