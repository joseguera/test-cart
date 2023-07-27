import React, { useRef } from "react";
import ImageCarousel from "./ImageCarousel";
import Quantity from "./Quantity";

export default function Item({ item, addToCart, updateItemQty }) {
  const currQty = useRef();

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
      <h2>{item.title}</h2>
      <ImageCarousel item={item} />
      <p>
        <span>Price: </span>
        {item.price}
      </p>
      <Quantity item={item} currQty={currQty} />
      <p>{item.description}</p>
      <button
        onClick={() => {
          updateItemQty(Number(currQty.current.value));
          addToCart(item);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
