"use client";
import { ProductPreviewType } from "@/types/types";
import { createContext, useEffect, useState } from "react";

type CartContextType = {
  cart: ProductPreviewType[];
  setCart: React.Dispatch<React.SetStateAction<ProductPreviewType[]>>;
  totalPrice: number;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  totalPrice: 0,
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<ProductPreviewType[]>([]);
  const [totalPrice, settotalPrice] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    settotalPrice(total);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
