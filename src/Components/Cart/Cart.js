// import React, { useContext, useState } from "react";
// import { UserContext } from "./../../App";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// const Cart = () => {
//   const [cartData, setCartData] = useContext(UserContext);

//   const deleteUser = (id) => {
//     const product = cartData.filter((product) => product.id != id);
//     setCartData([...product]);
//   };
//   return (
//     <div>
//       {cartData.map((data) => (
//         <div style={{ display: "flex", paddingTop: "35px" }}>
//           <div style={{ display: "flex" }}>
//             <img
//               style={{ height: "60px", width: "60px" }}
//               src={data.img}
//               alt=""
//             />
//             <span
//               style={{
//                 paddingLeft: "5px",
//                 paddingBottom: "10px",
//                 color: "red",
//               }}
//             >
//               {" "}
//               {data.quantity}
//             </span>
//           </div>

//           <p style={{ paddingLeft: "20px", paddingTop: "20px" }}>{data.name}</p>
//           <p style={{ paddingLeft: "20px", paddingTop: "20px" }}>
//             BDT{data.price}.00
//           </p>

//           <span style={{ paddingLeft: "20px", paddingTop: "20px" }}>
//             <FontAwesomeIcon
//               icon={faTrashAlt}
//               onClick={() => deleteUser(data.id)}
//             />
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
