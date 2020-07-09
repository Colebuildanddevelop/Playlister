import React from "react";
import CategoriesList from "../Components/CategoriesList.js";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
        return defaultSort.sort((a, b) =>
          a.playlists.length < b.playlists.length ? 1 : -1
        );
      case "Least Popular":
        return defaultSort.sort((a, b) =>
          a.playlists.length > b.playlists.length ? 1 : -1
        );
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
    console.log(this.state.categories);
    return (
      <div>
        <Row>
          <Col>
            <h1 className="category-title">Categories</h1>
          </Col>
        </Row>
        <Row>
          <label className="sort">
            <strong>Sort By: </strong>

            <select onChange={(e) => this.sortBy(e.target.value)}>
              <option value="All">All</option>
              <option value="Most Popular">Most Popular</option>
              <option value="Least Popular">Least Popular</option>
            </select>
          </label>
        </Row>

        <Container>
          <Row>
            <Col>
              <CategoriesList categories={this.handleSort()} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
