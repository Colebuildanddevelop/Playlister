import React from "react";
import CategoriesList from "../Components/CategoriesList.js";
import Dropdown from "react-bootstrap/Dropdown";

export default class CategoriesContainer extends React.Component {
  state = {
    categories: [],
    sort: "All",
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/categories", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          categories: data,
        })
      );
  }

  handleSort = () => {
    let defaultSort = this.state.categories;
    switch (this.state.sort) {
      case "Most Popular":
        return defaultSort.sort((a, b) => (a.name > b.name ? 1 : -1));
      case "Least Popular":
        return defaultSort.sort((a, b) => (a.name < b.name ? 1 : -1));
      default:
        return defaultSort;
    }
  };

  sortBy = (selection) => {
    this.setState({
      sort: selection,
    });
  };
  render() {
    return (
      <div>
        <h1>Categories</h1>

        <label>
          <strong>Sort By:</strong>
          <select onChange={(e) => this.sortBy(e.target.value)}>
            <option value="All">All</option>
            <option value="Most Popular">Most Popular</option>
            <option value="Least Popular">Least Popular</option>
          </select>
        </label>

        <CategoriesList categories={this.handleSort()} />
      </div>
    );
  }
}
