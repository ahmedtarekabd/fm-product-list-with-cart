"use client";
import { CartContext } from "@/providers/cart";
import ProductPreview from "./product-preview";
import { ProductPreviewType } from "@/types/types";
import { useContext, useState } from "react";

const Listings = ({
  listings,
}: {
  listings: ProductPreviewType[];
}) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="lg:col-span-8">
      <h1 className="text-4xl font-bold my-6">Desserts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((listing: ProductPreviewType, index: number) => (
          <ProductPreview
            key={index}
            {...listing}
            quantity={
              cart.find((product) => product.name === listing.name)?.quantity!
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Listings;
