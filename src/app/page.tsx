import Cart from "@/components/cart";
import Listings from "@/components/listings";

export default function Home() {
  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-12 my-8 gap-8">
        {/* Listings */}
        <Listings />
        {/* Cart */}
        <Cart />
      </div>
    </>
  );
}
