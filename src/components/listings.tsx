import { getListings } from "@/actions/listings/listings";
import ProductPreview from "./product-preview";
import { ProductPreviewType } from "@/types/types";

const Listings = () => {
  const listings = getListings();
  return (
    <div className="lg:col-span-8">
      <h1 className="text-4xl font-bold my-6">Desserts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((listing: ProductPreviewType, index: number) => (
          <ProductPreview key={index} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
