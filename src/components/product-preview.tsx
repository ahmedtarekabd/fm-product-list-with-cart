"use client";
import Image from "next/image";
import { ProductPreviewType } from "@/types/types";
import { Button } from "./ui/button";
import { MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";

const ProductPreview = ({
  image,
  name,
  category,
  price,
}: ProductPreviewType) => {
  const [quantity, setQuantity] = useState(0);
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
            <div className="bg-destructive flex items-center justify-center border-[0.5px] rounded-full -translate-y-1/2 gap-2 overflow-hidden">
              <Button
                size={"icon"}
                className="bg-inherit rounded-full group/button hover:bg-transparent"
                onClick={() => setQuantity((prev) => prev - 1)}
              >
                <MinusCircle
                  className="group-hover/button:fill-primary group-hover/button:text-destructive"
                  size={16}
                />
              </Button>
              {quantity}
              <Button
                size={"icon"}
                className="bg-inherit rounded-full group/button hover:bg-transparent"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <PlusCircle
                  className="group-hover/button:fill-primary group-hover/button:text-destructive"
                  size={16}
                />
              </Button>
            </div>
          </>
        ) : (
          <>
            <Button
              className="border-[0.5px] rounded-full -translate-y-1/2 p-4 flex items-center gap-2"
              onClick={() => setQuantity((prev) => prev + 1)}
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
