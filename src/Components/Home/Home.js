import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./../Product/Product";
import OrderReviews from "../OrderReviews/OrderReviews";
import Cart from "./../Cart/Cart";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#F2F4F9" }}>
      <Row>
        <Col md={8} style={{ borderRight: "1px solid gray" }}>
          <Product />
        </Col>

        <Col md={4}>
          <OrderReviews />
          {/* <Cart /> */}
        </Col>
      </Row>
    </div>
  );
};

export default Home;
