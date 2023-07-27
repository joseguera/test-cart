import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart({ total }) {
  return (
    <>
      <Link to="/bag">Cart Total: {total}</Link>
    </>
  );
}
