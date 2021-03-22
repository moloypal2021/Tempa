import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartBox = () => {
  return (
    <div>
      <section className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 lg:py-10 md:py-8 sm:py-6 py-4">
        <CartItem />
        <CartItem />
        <div className="lg:my-8 sm:py-7 py-6">
          <div className="flex items-center justify-between lg:mb-12 md:mb-8 mb-6">
            <h3 className="lg:text-2xl sm:text-xl text-lg text-dark-title font-medium">
              SUBTOTAL
            </h3>
            <h3 className="lg:text-2xl sm:text-xl text-lg text-dark-title font-medium">
              100$
            </h3>
          </div>
          <div className="flex justify-center lg:mb-8 sm:mb-6 mb-4">
            <Link to="/checkout">
              <button className="xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 md:py-4 py-2 bg-dark-button rounded-lg md:text-lg text-base font-bold text-white">
                Check out
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartBox;
