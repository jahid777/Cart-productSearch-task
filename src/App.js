import { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";

export const UserContext = createContext();

function App() {
  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [orderData, setOrderData] = useState([]);
  return (
    <UserContext.Provider
      value={[
        cartData,
        setCartData,
        cartTotal,
        setCartTotal,
        orderData,
        setOrderData,
      ]}
    >
      <Home />
    </UserContext.Provider>
  );
}

export default App;
