import React from 'react'
import PlaylistList from '..c/components/PlaylistList'
import ApiKey from'../Key'

class MainContainer extends React.Component{


state={
    videos: null,
    searchTerm: "jazz"
  }

  componentDidMount (){
     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${ApiKey.API_KEY}&q=${this.state.searchTerm}&type=video`)
     //fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCpsM4JZEmu7P3DxN45cg8wh6QliY87FBk&q=%22pop%22&type=video`)
    .then(res => res.json())
     .then(videos => this.setState({
       videos: videos.items
     }))

  }
  render (){

    return (
        <div >
      
          <PlaylistList videos={this.state.videos}/>
            
        </div>
    )

}

}
export default MainContainer;
