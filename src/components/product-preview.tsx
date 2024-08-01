"use client";
import Image from "next/image";
import { ProductPreviewType } from "@/types/types";
import { Button } from "./ui/button";
import { MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useContext, useState } from "react";
import { CartContext } from "@/providers/cart";

const ProductPreview = ({
  image,
  name,
  category,
  price,
  quantity,
}: ProductPreviewType) => {
  const { cart, setCart } = useContext(CartContext);
  const addProduct = () => {
    const product = cart.find((p) => p.name === name);
    if (product) {
      const newCart = cart.map((p) => {
        if (p.name === name) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { image, name, price, category, quantity: 1 }]);
    }
  };

  const removeProduct = () => {
    const product = cart.find((p) => p.name === name);
    if (product && product.quantity > 1) {
      const newCart = cart.map((p) => {
        if (p.name === name) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });
      setCart(newCart);
    } else {
      const newCart = cart.filter((p) => p.name !== name);
      setCart(newCart);
    }
  };

  return (
    <div className="-space-y-2">
      <div className="flex flex-col items-center">
        <Image
          src={image.mobile}
          className={
            "sm:hidden rounded-lg object-contain" +
            (quantity ? " border-2 border-border" : "")
          }
          alt={name}
          width={9000}
          height={0}
        />
        <Image
          src={image.tablet}
          className={
            "hidden sm:block lg:hidden rounded-lg object-contain" +
            (quantity ? " border-2 border-border" : "")
          }
          alt={name}
          width={9000}
          height={0}
        />
        <Image
          src={image.desktop}
          className={
            "hidden lg:block rounded-lg object-contain" +
            (quantity ? " border-2 border-border" : "")
          }
          alt={name}
          width={9000}
          height={0}
        />
        {quantity ? (
          <>
            <div className="bg-destructive text-white flex items-center justify-center border-[0.5px] rounded-full -translate-y-1/2 gap-4 overflow-hidden">
              <Button
                size={"icon"}
                className="bg-inherit rounded-full group/button hover:bg-transparent"
                onClick={removeProduct}
              >
                <MinusCircle
                  className="group-hover/button:fill-primary group-hover/button:text-destructive text-primary"
                  size={16}
                />
              </Button>
              {quantity}
              <Button
                size={"icon"}
                className="bg-inherit rounded-full group/button hover:bg-transparent"
                onClick={addProduct}
              >
                <PlusCircle
                  className="group-hover/button:fill-primary group-hover/button:text-destructive text-primary"
                  size={16}
                />
              </Button>
            </div>
          </>
        ) : (
          <>
            <Button
              className="border-[0.5px] rounded-full -translate-y-1/2 p-4 flex items-center gap-2"
              onClick={addProduct}
            >
              <ShoppingCart className="text-destructive" size={24} />
              Add to cart
            </Button>
          </>
        )}
      </div>
      <div>
        <p className="text-sm font-light">{category}</p>
        <h2 className="font-semibold">{name}</h2>
        <p className="font-bold text-destructive">{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default ProductPreview;
