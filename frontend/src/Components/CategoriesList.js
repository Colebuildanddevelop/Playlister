import React from "react";
import CategoryCard from "../Components/CategoriesCard.js";

export default class CategoryList extends React.Component {
  render() {
    return (
      <div>
        {this.props.categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
    );
  }
}
