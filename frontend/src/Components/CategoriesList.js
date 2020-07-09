import React from "react";
import CategoryCard from "../Components/CategoryCard.js";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class CategoryList extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.props.categories.map((category) => (
              <div>
                <CategoryCard category={category} />
              </div>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
