import React, { useState } from "react";

export default function Quantity({ item, qty, getQty }) {

  const increaseQty = () => {
    getQty(qty + 1);
  }

  const decreaseQty = () => {
    getQty(qty - 1);
  }

  return (
    <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
     
      {console.log("Quantity", qty)}

      <button
        disabled={qty < 1 ? true : false}
        onClick={() => decreaseQty()}
      >
        &minus;
      </button>
      <input
        readOnly
        style={{ width: "25px", textAlign: "center" }}
        type="text"
        value={qty}
      />
      <button
        disabled={qty === item.stock ? true : false}
        onClick={() => increaseQty()}

      >
        &#43;
      </button>
    </div>
  );
}
