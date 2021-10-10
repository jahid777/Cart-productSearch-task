import React, { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ProductItem = ({ product, handleClick }) => {
  const { id, name, img, price } = product;

  //this is for animation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      style={{ textAlign: "center", padding: "20px", cursor: "pointer" }}
      onClick={() => handleClick(product)}
    >
      <div
        style={{
          borderRadius: "5%",
          boxShadow: "5px 5px 8px #888888",
          backgroundColor: "white",
        }}
      >
        <img
          data-aos="fade-up"
          style={{ height: "120px", width: "120px", borderRadius: "5%" }}
          src={img}
          alt=""
        />
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default ProductItem;
