import React from "react";
import keys from "../keys.js";
import _ from "lodash";
import SearchBar from "../Components/SearchBar.js";
import VideoList from "../Components/VideoList";
const URL = (key, term) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${term}&type=video`;
};

export default class SearchContainer extends React.Component {
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
    return (
      <div>
        {this.state.isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <div>
            <SearchBar changeTerm={videoSearch} />
            <VideoList videos={this.state.videos} />
          </div>
        )}
      </div>
    );
  }
}
