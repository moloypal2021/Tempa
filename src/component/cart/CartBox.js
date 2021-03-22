import React from "react";
import CartItem from "./CartItem";

const CartBox = () => {
  return (
    <div>
      <section className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 lg:py-16 md:py-14 sm:py-12 py-10">
        <CartItem />
      </section>
    </div>
  );
};

export default CartBox;
