import React from "react";
import LibraryPlaylistList from "../Components/LibraryPlaylistList";
import ApiKey from "../keys";
import CreatePlaylist from "../Components/CreatePlaylist";

class LibraryContainer extends React.Component {
  state = {
    playlists: null,
    searchTerm: "jazz",
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`, {
      method:"GET",
      headers:{
        Authorization: `Bearer ${localStorage.token}`
      }
    }) 
      .then((res) => res.json())
      .then((user) => {
      console.log(user)
        this.setState({
          playlists: user.playlists
        })
      });
  }

  // newPlaylist = () => {
  //   fetch('http://localhost:3000/api/v1/users',{
  //     method: "POST",
  //     headers:{
  //       "content-type":"application/json"
  //     },
  //     body: JSON.stringify({
  //       title: new.title,
  //       category: new.category
  //     })
  //   })
  // }

      
  render() {
    
    return (
      <div>
        <CreatePlaylist />
        {/* newPlaylist={this.newPlaylist}/> */}
        <LibraryPlaylistList   playlists={this.state.playlists}
        />
       
      </div>
    );
  }
}
export default LibraryContainer;
