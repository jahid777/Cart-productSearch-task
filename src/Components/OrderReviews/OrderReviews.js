import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const OrderReviews = () => {
  const [
    cartData,
    setCartData,
    cartTotal,
    setCartTotal,
    orderData,
    setOrderData,
  ] = useContext(UserContext);
  const [products, setProducts] = useState(cartData);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  setCartTotal(totalPrice);

  useEffect(() => {
    setTotalPrice(0);
    setShippingPrice(0);
  }, [cartData]);
  useEffect(() => {
    sumOfPrice();
  }, [cartData]);

  //  Product price calculation
  const sumOfPrice = () => {
    let total = 0;
    let subTotal = 0;
    if (!cartData.length) {
      setTotalPrice(0);
      setShippingPrice(0);
    }
    cartData.map((product) => {
      total = product.price * product.quantity;
      subTotal = subTotal + total;
      setTotalPrice(subTotal);
    });
  };

  // Delete items from cart
  const deleteItem = (id) => {
    let newData = cartData.filter((item) => item.id != id);
    setCartData(newData);
    setProducts(newData);
  };
  return (
    <div>
      {/* product */}
      <div>
        {cartData.map((data) => (
          <div style={{ display: "flex", paddingTop: "35px" }}>
            <div style={{ display: "flex" }}>
              <img
                style={{ height: "60px", width: "60px" }}
                src={data.img}
                alt=""
              />
              <span
                style={{
                  paddingLeft: "5px",
                  paddingBottom: "10px",
                  color: "red",
                }}
              >
                {" "}
                {data.quantity}
              </span>
            </div>

            <p style={{ paddingLeft: "20px", paddingTop: "20px" }}>
              {data.name}
            </p>
            <p style={{ paddingLeft: "20px", paddingTop: "20px" }}>
              BDT{data.price}.00
            </p>

            <span style={{ paddingLeft: "20px", paddingTop: "20px" }}>
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => deleteItem(data.id)}
              />
            </span>
          </div>
        ))}
      </div>
      {/* end of product */}
      <div style={{ marginLeft: "15px" }}>
        <div style={{ marginTop: "90px" }}>
          <span>Subtotal:</span>
          <span>$ {totalPrice}</span>{" "}
        </div>
        <hr />
        <div>
          <span>Shipping:</span>
          <span>$ {shippingPrice}.00</span>{" "}
        </div>
        <hr />
        <div>
          <span>Total:</span>
          <span>$ {totalPrice + shippingPrice}</span>{" "}
        </div>
        <Button style={{ marginTop: "50px", width: "350px" }} variant="primary">
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default OrderReviews;
