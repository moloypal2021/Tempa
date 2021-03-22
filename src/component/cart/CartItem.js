import React from "react";

const CartItem = () => {
  return (
    <div>
      <div className="gird md:grid-cols-2 gap-8 lg:pb-14 md:pb-12 sm:pb-8 pb-6 border-b border-dark-light-border">
        <div className="">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="max-w-345px md:h-270px h-44 object-cover object-center"
          />
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            <div className="md:col-span-1 col-span-2 order-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
