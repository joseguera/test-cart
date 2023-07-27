import React, { useState, useRef, useEffect } from "react";

export default function Quantity({ item, currQty }) {
  const [count, setCount] = useState(0);
  const plus = useRef();
  const minus = useRef();

  const increaseDecreaseQty = (direction) => {
    if (direction === "add") {
      setCount((prevCount) => {
        return prevCount < item.stock ? prevCount + 1 : item.stock;
      });
    }
    if (direction === "subtract") {
      setCount((prevCount) => {
        return prevCount > 1 ? prevCount - 1 : 0;
      });
    }
  };
  
  useEffect(() => {
      (count === item.stock) ? plus.current.disabled = true : plus.current.disabled = false;
      (count === 0) ? minus.current.disabled = true : minus.current.disabled = false;
  }, [item, plus, minus, count])

  return (
    <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      <button ref={minus} onClick={() => increaseDecreaseQty("subtract")}>&minus;</button>
      <input ref={currQty} style={{ width: "25px", textAlign: "center" }} type="text" value={count} />
      <button ref={plus} onClick={() => increaseDecreaseQty("add")}>&#43;</button>
    </div>
  );
}
