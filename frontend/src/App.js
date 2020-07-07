import React from "react";
import keys from "./keys.js";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import SearchContainer from "./Containers/SearchContainer";

import LibraryContainer from "./Containers/LibraryContainer";
import LoginContainer from "./Containers/LoginContainer";
import PlaylistContainer from "./Containers/PlaylistContainer.js";
import CategoriesContainer from "./Containers/CategoriesContainer";

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
    // console.log(this.state);
    return (
      <div className="App">
        {this.state.isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <BrowserRouter>
            <NavBar />
            <div style={{ margin: "20px" }}>
              <Switch>
                <Route
                  exact
                  path="/log-in"
                  render={(routeProps) => <LoginContainer {...routeProps} />}
                />
                <Route
                  exact
                  path="/playlists"
                  render={(routeProps) => <PlaylistContainer {...routeProps} />}
                />
                <Route
                  exact
                  path="/discover"
                  render={(routeProps) => {
                    return (
                      <div>
                        <SearchContainer
                          {...routeProps}
                          changeTerm={videoSearch}
                          videos={this.state.videos}
                        />
                      </div>
                    );
                  }}
                />
                <Route
                  exact
                  path="/categories"
                  render={(routeProps) => (
                    <CategoriesContainer {...routeProps} />
                  )}
                />
                <Route
                  exact
                  path="/my-library"
                  render={(routeProps) => <LibraryContainer {...routeProps} />}
                />
              </Switch>
            </div>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default App;
