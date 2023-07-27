import React, { useState } from "react";
import Cart from "./components/Cart";
import Item from "./components/Item";
import { products } from "./products";
import "./App.css";

function App() {
  const [shoppingItems, setShoppingItems] = useState(products);
  const [cartItems, setCartItems] = useState({});

  function updateItemQty(item, qty) {
    const newQty = shoppingItems.filter(product => product.id === item.id);
    const rest = shoppingItems.filter(product => product.id !== item.id);
    newQty[0].quantity = qty;
    const newList = [...rest, newQty[0]];
    newList.sort((a, b) => a.id - b.id)
    setShoppingItems(newList);
  }

  function addToCart(item, qty) {
    let prevQty;
    setCartItems((prevItems) => (
      prevQty = (prevItems[item.id] === undefined) ? 0 : prevItems[item.id].quantity,
      {
      ...prevItems,
      [item.id]: {
        ...item,
        quantity: qty + prevQty
      }
    }));
  }

  return (
    <>
      {console.log(cartItems)}
      {/* {console.log(shoppingItems)} */}
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
              updateItemQty={updateItemQty}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
