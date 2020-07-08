import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "react-router-dom/Link";

export default class CategoryCard extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>

            <Button as={Link} to={`categories/${category.id}`}>
              Go to {category.name}'s Page
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
