import React, { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Item from "./components/Item";
import { products } from "./products";
import "./App.css";

function App() {
  const [shoppingItems, setShoppingItems] = useState(products);
  const [cartItems, setCartItems] = useState({});
  const [itemQty, setItemQty] = useState(1);

  function updateItemQty(currQty) {
    setItemQty((prevQty) => {
      return prevQty + currQty;
    });
  }

  function addToCart(item) {
    setCartItems((prevItems) => ({
      ...prevItems,
      [item.id]: { ...item, quantity: itemQty },
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
              item={item}
              addToCart={addToCart}
              updateItemQty={updateItemQty}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
