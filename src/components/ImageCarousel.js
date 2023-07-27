import React, { useState } from "react";

export default function ImageCarousel({ item }) {
  const [count, setCount] = useState(0);

  const getCarouselCount = (direction) => {
    if (direction === "forward") {
      setCount((prevCount) => {
        return prevCount < item.images.length - 1 ? prevCount + 1 : 0;
      });
    }
    if (direction === "backward") {
      setCount((prevCount) => {
        return prevCount ? prevCount - 1 : item.images.length - 1;
      });
    }
  };

  return (
    <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      <button onClick={() => getCarouselCount("backward")}>&larr;</button>
      <img
        src={item.images[count]}
        alt={item.title}
        style={{ width: "100px" }}
      />
      <br />
      <button onClick={() => getCarouselCount("forward")}>&rarr;</button>
    </div>
  );
}
