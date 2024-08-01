import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import orderConfirmed from "../../public/assets/images/icon-order-confirmed.svg";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import { Separator } from "@radix-ui/react-separator";

const ConfirmOrder = () => {
  const { cart, setCart, totalPrice } = useContext(CartContext);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"} className="rounded-full p-6">
          Confirm Order
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-0">
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex flex-col gap-2">
              <Image
                src={orderConfirmed}
                alt="Order Confirmed"
                width={40}
                height={40}
              />
              <span className="text-2xl font-bold">Order Confirmed</span>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            We hope you enjoy your food!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="p-2 bg-rose-50/75 rounded-md space-y-4">
          {cart.map((product, i) => (
            <>
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Image
                    src={product.image.thumbnail}
                    alt={product.name}
                    className="rounded-sm"
                    width={50}
                    height={50}
                  />
                  <div className="">
                    <h4 className="font-medium text-sm">{product.name}</h4>
                    <div className="flex gap-2 items-center">
                      <p className="text-destructive font-medium">
                        {product.quantity}x
                      </p>
                      <p className="text-rose-950/75 text-sm">
                        @{formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-rose-950 text-sm font-medium">
                    {formatPrice(product.price * product.quantity)}
                  </p>
                </div>
              </div>
              <Separator className="h-[0.5px] bg-rose-950/20" />
            </>
          ))}
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Order Total </span>
            <span className="text-2xl font-bold text-rose-950">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-inherit" asChild onClick={() => setCart([])}>
            <div className="w-full">
              <Button variant={"destructive"} className="rounded-full w-full">
                Start New Order
              </Button>
            </div>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmOrder;
