import React from "react";
import CategoriesList from "../Components/CategoriesList.js";

export default class CategoriesContainer extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/categories")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          categories: data,
        })
      );
  }
  render() {
    return (
      <div>
        <CategoriesList categories={this.state.categories} />
      </div>
    );
  }
}
