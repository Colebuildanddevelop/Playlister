import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "react-router-dom/Link";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class CategoryCard extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div>
        <Row>
          <Col>
            <Col>
              <Card style={{ width: "18rem" }} className="category-card">
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>

                  <Button
                    style={{ marginTop: "50px" }}
                    className="edit-btn"
                    as={Link}
                    to={`categories/${category.id}`}
                  >
                    Go to {category.name}'s Page
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}
