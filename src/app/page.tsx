import { getListings } from "@/actions/listings/listings";
import Cart from "@/components/cart";
import Listings from "@/components/listings";
import CartProvider from "@/providers/cart";

export default async function Home() {
  const listings = await getListings();
  console.log(listings);
  return (
    <>
      <CartProvider>
        <div className="container grid grid-cols-1 lg:grid-cols-12 my-8 gap-8">
          {/* Listings */}
          <Listings listings={listings} />
          {/* Cart */}
          <Cart />
        </div>
      </CartProvider>
    </>
  );
}
