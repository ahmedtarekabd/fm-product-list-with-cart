"use client";
import { CartContext } from "@/providers/cart";
import React, { useContext } from "react";
import { formatPrice } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import emptyCart from "../../public/assets/images/illustration-empty-cart.svg";
import carbonNeutral from "../../public/assets/images/icon-carbon-neutral.svg";
import Image from "next/image";
import CartProduct from "./cart-product";
import { Separator } from "./ui/separator";
import ConfirmOrder from "./confirm-order";

const Cart = () => {
  const { cart, setCart, totalPrice } = useContext(CartContext);
  return (
    <Card className="lg:col-span-4 bg-white rounded-md my-8 h-min w-full">
      <CardHeader>
        <h3 className="text-2xl font-bold text-destructive">
          Your Cart ({cart.length})
        </h3>
      </CardHeader>
      {cart.length == 0 ? (
        <>
          <CardContent className="flex my-6 flex-col items-center">
            <Image src={emptyCart} alt="Empty Cart" width={100} height={100} />
            <p className="text-rose-800 font-semibold">
              Your added items will appear hear
            </p>
          </CardContent>
        </>
      ) : (
        <>
          <CardContent className="space-y-3">
            {cart.map((product, i) => (
              <>
                <CartProduct key={i} product={product} />
                <Separator className="h-[0.5px] bg-rose-950/20" />
              </>
            ))}
          </CardContent>
          <CardFooter className="flex-col justify-normal items-stretch gap-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Order Total </span>
              <span className="text-2xl font-bold text-rose-950">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-rose-50 rounded-md">
              <Image
                src={carbonNeutral}
                alt="Carbon Neutral"
                width={20}
                height={20}
              />
              <p>
                This is a <span className="font-medium">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <ConfirmOrder />
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default Cart;
