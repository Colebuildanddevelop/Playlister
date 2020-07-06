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
                  <table className="playlist celled striped padded table">
                <tbody>
                    <tr>
                        <th>
                            <h3 className="palylist center aligned header">Jazz Playlist</h3>
                        </th>
                    </tr>
                    {this.props.videos.map(video => {
                    return(<li><PlaylistCard video={video}/></li>)
                })}
                </tbody>

            </table>

            </div>   
               
        )
    }
}

export default PlaylistList;