import React, { useState } from "react";
import Product from "./Product";
import Row from "react-bootstrap/Row";

export default function ProductList() {
  const data = [
    { name: "Nasgor", price: 15000 },
    { name: "Soto Betawi", price: 20000 },
    { name: "Telor Gulung", price: 1000 },
    { name: "Kopi Janji Presiden", price: 200000 },
  ];
  const [foods, setFoods] = useState(data);

  const listProduct = foods.map((food) => (
    <Product name={food.name} price={food.price} />
  ));

  return (
    <Row style={{ height: "100vh" }} className="align-items-md-center">
      {listProduct}
    </Row>
  );
}
