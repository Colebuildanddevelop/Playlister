import React from 'react';
import PlaylistList from '../Components/PlaylistList';

class PlaylistContainer extends React.Component {
  
  state = {
    playlists: null
  }
    
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/playlists', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(playlists => {
      this.setState({
        playlists: playlists
      })
    })
  }
  
  render() {
    console.log(this.state)
    if (this.state.playlists === null) return <h1>loading</h1>
    return (
      <PlaylistList playlists={this.state.playlists} />
    )
  }
}

export default PlaylistContainer;