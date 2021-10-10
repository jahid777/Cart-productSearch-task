import React, { useContext, useState } from "react";
import Data from "../../../src/FakeData";
import ProductItem from "./../ProductItem/ProductItem";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { UserContext } from "./../../App";
import "./Product.css";
const Product = () => {
  const [products, setProducts] = useState(Data);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // this is for searching product
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  //context
  const [cartData, setCartData] = useContext(UserContext);
  const handleClick = (singleProduct) => {
    //thats all done for not to add duplicate product when click
    let isAdded = false;
    if (cartData.length === 0) {
      singleProduct = { ...singleProduct, quantity: 1 };
      setCartData([...cartData, singleProduct]);
    }

    cartData.map((item) => {
      if (item.id === singleProduct.id) {
        isAdded = true;
      }
    });
    if (!isAdded) {
      singleProduct = { ...singleProduct, quantity: 1 };
      setCartData([...cartData, singleProduct]);
    }
  };
  console.log(cartData, "clicked");

  return (
    <div>
      <InputGroup className="mb-3 mainInput">
        <FormControl
          onChange={handleChange}
          className="inputStyle"
          placeholder="Search your product"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        {/* <InputGroup.Text id="basic-addon2">Search</InputGroup.Text> */}
      </InputGroup>

      <div className="productMain">
        {/* Not found showing */}
        {filteredProducts.length === 0 && (
          <h1 className="notFound">Product Not Found</h1>
        )}

        {/* data mapping */}
        {filteredProducts?.map((pds) => (
          <ProductItem key={pds.id} product={pds} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Product;
