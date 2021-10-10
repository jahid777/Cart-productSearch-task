import React, { useState } from "react";
// import {
//   AiFillPlusSquare,
//   AiFillMinusCircle,
//   AiFillDelete,
// } from "react-icons/fa";

const OrderReview = ({ product, handlePlusMinus, deleteItem }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const plus = (id) => {
    setQuantity(quantity + 1);
    handlePlusMinus(id, quantity + 1);
  };

  const minus = (id) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      handlePlusMinus(id, quantity - 1);
    }
  };
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={product.img} alt="" />

            <div>
              <div>
                <h4>{product.name}</h4>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <button onClick={() => plus(product.id)}>
                  {/* <AiFillPlusSquare /> */}+
                </button>
                <input
                  className="mx-2 text-center w-4 font-medium text-gray-800"
                  type="text"
                  value={quantity}
                />
                <button onClick={() => minus(product.id)}>
                  {/* <AiFillMinusCircle /> */}-
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between flex-wrap content-center">
            <button onClick={() => deleteItem(product.id)}>
              {/* <AiFillDelete /> */}
              delete
            </button>
            <h4>$ {product.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
