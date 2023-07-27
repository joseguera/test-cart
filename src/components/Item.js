import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import Quantity from "./Quantity";

export default function Item({ item, addToCart, updateItemQty }) {
  const [qty, setQty] = useState(0)

  const getQty = (newQty) => {
    setQty(newQty)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "400px",
        height: "400px",
        border: "1px solid black",
      }}
    >
      <Link to={`/product/${item.title}`}>
        <h2>{item.title}</h2>
      </Link>
      <ImageCarousel item={item} />
      <p>
        <span>Price: </span>
        {item.price}
      </p>
      <Quantity item={item} qty={qty} getQty={getQty} />
      <p>{item.description}</p>
      <button
        onClick={() => {addToCart(item, qty); updateItemQty(item, qty)}}
      >
        Add to Cart
      </button>
    </div>
  );
}
