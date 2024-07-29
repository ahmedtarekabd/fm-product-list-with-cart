"use client";
import React, { useEffect } from "react";

const Cart = () => {
  // useEffect(() => {
  //   // Set an item in session storage
  //   sessionStorage.setItem("cart", "Your cart data");

  //   // Get an item from session storage
  //   const cartData = sessionStorage.getItem("cart");
  //   console.log(cartData); // Output: Your cart data

  //   // Remove an item from session storage
  //   // sessionStorage.removeItem('cart');

  //   // Clear all items in session storage
  //   // sessionStorage.clear();
  // }, []);

  return (
    <div className="lg:col-span-4 bg-white rounded-md my-8 p-4 min-h-48 w-full">
      <h3 className="text-2xl font-bold">Cart</h3>
    </div>
  );
};

export default Cart;
