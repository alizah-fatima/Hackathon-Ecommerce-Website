import React from "react";
import Link from "next/link";

function Cart() {
  return (
    <div>
      <div className="bg-purple-100 h-60">
        <div>
          <h3 className="text-3xl text-blue-950 font-bold pt-16 ml-64">
            Blog Page
          </h3>
        </div>
        <div className="mt-2 ml-64">
          <Link href="/#" className="text-black text-md font-medium mr-2">
            Home .
          </Link>
          <Link href="/#" className="text-black text-md font-medium mr-2">
            Pages .
          </Link>
          <Link href="/cart" className="text-pink-500 text-md font-medium">
            Your Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
