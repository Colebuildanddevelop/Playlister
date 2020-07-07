import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import SearchContainer from "./Containers/SearchContainer";

import LibraryContainer from "./Containers/LibraryContainer";
import LoginContainer from "./Containers/LoginContainer";
import PlaylistContainer from "./Containers/PlaylistContainer.js";
import CategoriesContainer from "./Containers/CategoriesContainer";
import CategoryContainer from "./Containers/CategoryContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
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
                      <SearchContainer {...routeProps} />
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/categories"
                render={(routeProps) => <CategoriesContainer {...routeProps} />}
              />
              <Route
                exact
                path="/categories/:id"
                render={(routeProps) => <CategoryContainer {...routeProps} />}
              />
              <Route
                exact
                path="/my-library"
                render={(routeProps) => <LibraryContainer {...routeProps} />}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
