import React, { useContext, useEffect, useState } from "react";
import OrderReview from "../OrderReview/OrderReview";
import { UserContext } from "./../../App";

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
  console.log(cartData, "there is");
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(50);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  setCartTotal(totalPrice);

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
      setIsCartEmpty(true);
    }
    cartData.map((product) => {
      total = product.price * product.quantity;
      subTotal = subTotal + total;
      setTotalPrice(subTotal);
    });
  };

  // Handle Cart Items quantity with plus minus icon
  const handlePlusMinus = (id, quantity) => {
    let newCart;
    cartData.map((item) => {
      if (id === item.id) {
        newCart = { ...item, quantity: quantity };
      }
    });
    let newData = cartData.filter((item) => item.id != id);
    newData = [...newData, newCart];
    setCartData(newData);
  };

  // Delete items from cart
  const deleteItem = (id) => {
    let newData = cartData.filter((item) => item.id != id);
    setCartData(newData);
    setProducts(newData);
  };
  return (
    <div>
      {!isCartEmpty && (
        <div className="md:w-4/5 mx-auto px-2 py-24">
          <div className="md:grid md:grid-cols-5">
            <div className="md:col-span-3">
              {products.map((product) => (
                <OrderReview
                  key={product.id}
                  product={product}
                  handlePlusMinus={handlePlusMinus}
                  deleteItem={deleteItem}
                ></OrderReview>
              ))}
            </div>

            <div>
              <div>
                <div>
                  <span>Subtotal:</span>
                  <span>$ {totalPrice}</span>{" "}
                </div>
                <hr />
                <div>
                  <span>Shipping:</span>
                  <span>$ {shippingPrice}</span>{" "}
                </div>
                <hr />
                <div>
                  <span>Total:</span>
                  <span>$ {totalPrice + shippingPrice}</span>{" "}
                </div>
              </div>

              <button>
                <span>Checkout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {isCartEmpty && (
        <div>
          <div>
            <div>
              <h3>Your Cart is Empty!</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderReviews;
