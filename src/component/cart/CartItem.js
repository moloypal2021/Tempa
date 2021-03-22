import React from "react";

const CartItem = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 grid-cols-7 gap-8 items-center lg:pb-14 md:pb-12 sm:pb-8 pb-6 border-b border-dark-light-border">
        <div className="sm:col-span-1 col-span-3">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="max-w-345px w-full md:h-270px h-44 object-cover object-center"
          />
        </div>
        <div className="sm:col-span-1 col-span-4">
          <div className="grid grid-cols-2 sm:gap-x-6 md:gap-y-7 gap-y-4">
            <div className="md:col-span-1 col-span-2 order-1">
              <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-dark-title font-bold">
                Ceramic Vase
              </h2>
            </div>
            <div className="md:col-span-1 col-span-2 md:order-2 order-4">
              <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-dark-title md:text-center">
                50$
              </h2>
            </div>
            <div className="md:order-3 order-2">
              <h2 className="md:text-lg sm:text-base text-sm text-dark-title">
                Color white
              </h2>
            </div>
            <div className="md:order-4 order-3">
              <h2 className="md:text-lg sm:text-base text-sm text-dark-title flex justify-center">
                <span className="md:block hidden mr-2">Size</span> S
              </h2>
            </div>
            <div className="order-5">
              <div className="flex items-center">
                <button className="md:w-8 md:h-8 w-5 h-5 mr-3">
                  <svg
                    className="md:w-8 md:h-8 w-6 h-6"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.33 4H6.67A2.67 2.67 0 004 6.67v18.66C4 26.81 5.2 28 6.67 28h18.66c1.48 0 2.67-1.2 2.67-2.67V6.67C28 5.19 26.8 4 25.33 4zM16 10.67v10.66M10.67 16h10.66"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="1"
                  className="md:w-11 md:h-10 sm:w-9 sm:h-8 w-8 h-7 text-dark-title border border-dark-border text-center"
                />
                <button className="md:w-8 md:h-8 w-5 h-5 ml-2">
                  <svg
                    className="md:w-8 md:h-8 w-6 h-6"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.33 4H6.67A2.67 2.67 0 004 6.67v18.66C4 26.81 5.2 28 6.67 28h18.66c1.48 0 2.67-1.2 2.67-2.67V6.67C28 5.19 26.8 4 25.33 4zM16 10.67v10.66M10.67 16h10.66"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="order-6">
              <div className="flex justify-center">
                <button className="md:w-8 md:h-8 w-6 h-6">
                  <svg
                    className="md:w-8 md:h-8 w-6 h-6"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8h24M10.67 8V5.33a2.67 2.67 0 012.66-2.66h5.34a2.67 2.67 0 012.66 2.66V8m4 0v18.67a2.67 2.67 0 01-2.66 2.66H9.33a2.67 2.67 0 01-2.66-2.66V8h18.66zM13.33 14.67v8M18.67 14.67v8"
                      stroke="#767676"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
