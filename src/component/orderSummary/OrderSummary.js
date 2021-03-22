import React from "react";

const OrderSummary = () => {
  return (
    <div>
      <div className="lg:px-10 py-8 lg:border border-dark-title">
        <h5 className="sm:text-lg text-sm text-dark-title font-medium md:mb-8 sm:mb-6 mb-4">
          Order Summary
        </h5>
        <div className="flex space-x-8 justify-between xl:mb-10 lg:mb-8 sm:mb-6 mb-4">
          <div className="">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="max-w-148px w-full sm:h-36 h-24 object-cover object-center"
            />
          </div>
          <div className="">
            <p className="text-sm text-dark-title mb-8">Ceramic Vase</p>
            <p className="text-sm text-dark-text-sub mb-8">Color white</p>
            <input
              type="text"
              placeholder="1"
              className="md:w-24 md:h-10 sm:w-20 sm:h-8 w-16 h-7 text-dark-title border border-dark-border text-center"
            />
          </div>
          <div className="">
            <p className="text-sm text-dark-title text-center mb-8">50$</p>
            <p className="text-sm text-dark-text-sub text-center mb-8">S</p>
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
  );
};

export default OrderSummary;
