import React from "react";

const OrderSummary = () => {
  return (
    <div>
      <div className="xl:px-10 lg:px-6 py-8 lg:border border-dark-title">
        <h5 className="sm:text-lg text-sm text-dark-title font-medium md:mb-8 sm:mb-6 mb-4">
          Order Summary
        </h5>
        <div className="flex sm:space-x-8 space-x-4 justify-between items-center xl:mb-10 lg:mb-8 sm:mb-6 mb-4">
          <div className="">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="sm:max-w-148px max-w-96px w-full sm:h-36 h-24 object-cover object-center"
            />
          </div>
          <div className="">
            <p className="text-sm text-dark-title sm:mb-8 mb-4">Ceramic Vase</p>
            <p className="text-sm text-dark-text-sub sm:mb-8 mb-4">
              Color white
            </p>
            <input
              type="text"
              placeholder="1"
              className="md:w-24 md:h-10 sm:w-20 sm:h-8 w-16 h-7 text-dark-title border border-dark-border text-center"
            />
          </div>
          <div className="">
            <p className="text-sm text-dark-title text-center sm:mb-8 mb-4">
              50$
            </p>
            <p className="text-sm text-dark-text-sub text-center sm:mb-8 mb-4">
              S
            </p>
            <div className="flex justify-center">
              <button className="md:w-8 md:h-8 w-6 h-6">
                <svg
                  className="md:w-8 md:h-8 w-6 h-6 "
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8h24M10.67 8V5.33a2.67 2.67 0 012.66-2.66h5.34a2.67 2.67 0 012.66 2.66V8m4 0v18.67a2.67 2.67 0 01-2.66 2.66H9.33a2.67 2.67 0 01-2.66-2.66V8h18.66zM13.33 14.67v8M18.67 14.67v8"
                    stroke="#767676"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex sm:space-x-8 space-x-4 justify-between items-center xl:mb-10 lg:mb-8 sm:mb-6 mb-4">
          <div className="">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="sm:max-w-148px max-w-96px w-full sm:h-36 h-24 object-cover object-center"
            />
          </div>
          <div className="">
            <p className="text-sm text-dark-title sm:mb-8 mb-4">Ceramic Vase</p>
            <p className="text-sm text-dark-text-sub sm:mb-8 mb-4">
              Color white
            </p>
            <input
              type="text"
              placeholder="1"
              className="md:w-24 md:h-10 sm:w-20 sm:h-8 w-16 h-7 text-dark-title border border-dark-border text-center"
            />
          </div>
          <div className="">
            <p className="text-sm text-dark-title text-center sm:mb-8 mb-4">
              50$
            </p>
            <p className="text-sm text-dark-text-sub text-center sm:mb-8 mb-4">
              S
            </p>
            <div className="flex justify-center">
              <button className="md:w-8 md:h-8 w-6 h-6">
                <svg
                  className="md:w-8 md:h-8 w-6 h-6 "
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8h24M10.67 8V5.33a2.67 2.67 0 012.66-2.66h5.34a2.67 2.67 0 012.66 2.66V8m4 0v18.67a2.67 2.67 0 01-2.66 2.66H9.33a2.67 2.67 0 01-2.66-2.66V8h18.66zM13.33 14.67v8M18.67 14.67v8"
                    stroke="#767676"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="sm:py-6 border-b border-dark-light-border">
          <div className="flex justify-between mb-2">
            <p className="text-base text-dark-title">Subtotal</p>
            <p className="text-base text-dark-title">100$</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-base text-dark-title">Shipping</p>
            <p className="text-base text-dark-title">6,99$</p>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <p className="text-lg font-bold text-dark-title">TOTAL</p>
          <p className="text-lg font-bold text-dark-title">106,99$</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
