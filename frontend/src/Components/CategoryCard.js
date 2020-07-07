import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class CategoryCard extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>Playlist's go here</Card.Text>
            <Button href="#">Go to Category's Page</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
