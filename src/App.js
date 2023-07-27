import React, { useState } from "react";
import Cart from "./components/Cart";
import Item from "./components/Item";
import { products } from "./products";
import "./App.css";

function App() {
  const [shoppingItems, setShoppingItems] = useState(products);
  const [cartItems, setCartItems] = useState({});

  function addToCart(item, qty) {
    setCartItems((prevItems) => ({
      ...prevItems,
      [item.id]: { ...item, quantity: qty },
    }));
  }

  return (
    <>
      {console.log(cartItems)}
      <Cart total={Object.keys(cartItems).length} />
      <div
        className="App"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          gap: "10px",
        }}
      >
        {shoppingItems.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
