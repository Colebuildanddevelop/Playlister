import React from "react";
import SearchContainer from "./Containers/SearchContainer";
import VideoList from "./Components/VideoList";
import keys from "./keys.js";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";

const URL = (key, term) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${term}&type=video`;
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      searchTerm: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchVideos();
  }

  changeSearchTerm = (term) => {
    this.setState(
      {
        searchTerm: term,
      },
      this.fetchVideos()
    );
  };

  fetchVideos = () => {
    fetch(URL(keys.API_KEY, this.state.searchTerm))
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          videos: data.items,
          isLoading: false,
        })
      );
  };
  render() {
    const videoSearch = _.debounce((term) => {
      this.changeSearchTerm(term);
    }, 200);
    // console.log(this.state.videos);
    return (
      <div className="App">
        {this.state.isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <div>
            <SearchContainer changeTerm={videoSearch} />
            <VideoList videos={this.state.videos} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
