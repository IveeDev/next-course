"use client";
import React from "react";

const AddToCart = () => {
  console.log("Client Comp, hello");
  return (
    <div>
      <button className="btn btn-primary" onClick={() => console.log("click")}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
