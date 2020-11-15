import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Product(props) {
  return (
    <Col md={3}>
      <Card>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Rp. {props.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
