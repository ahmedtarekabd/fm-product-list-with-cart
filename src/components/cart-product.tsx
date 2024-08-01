import { CartContext } from "@/providers/cart";
import { ProductPreviewType } from "@/types/types";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import { XCircle } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const CartProduct = ({ product }: { product: ProductPreviewType }) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <h4 className="font-medium text-sm">{product.name}</h4>
        <div className="flex gap-2 items-center">
          <p className="text-destructive font-medium">{product.quantity}x</p>
          <p className="text-rose-950/75 text-sm">
            @{formatPrice(product.price)}
          </p>
          <p className="text-rose-950/75 text-sm font-medium">
            {formatPrice(product.price * product.quantity)}
          </p>
        </div>
      </div>
      <div>
        <Button
          size={"icon"}
          className="bg-inherit text-destructive"
          onClick={() => setCart((prev) => prev.filter((p) => p !== product))}
        >
          <XCircle size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
