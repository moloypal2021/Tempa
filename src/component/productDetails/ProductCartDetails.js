import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import Slider from "../slider/Slider";
const ProductCartDetails = forwardRef(({ open, setOpen }, ref) => {
  return (
    <div>
      <section className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 xl:py-16 lg:py-12 md:py-10 sm:py-8 py-7">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Items Image Slider */}
          <div className="">
            <div className="md:max-w-2xl sm:max-w-lg max-w-xs mx-auto  overflow-hidden">
              <Slider />
            </div>
          </div>

          {/* Cart Details */}
          <div className="">
            <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-title lg:font-bold lg:text-left text-center lg:mb-8 md:mb-6 sm:mb-4 mb-2">
              Ceramic Vase
            </h2>
            <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-title lg:text-left text-center xl:mb-12 lg:mb-10 md:mb-8 sm:mb-6 mb-4">
              50$
            </h2>
            <div className="grid grid-cols-2 lg:gap-x-16 sm:gap-x-12 gap-x-4 md:gap-y-12 sm:gap-y-10 gap-y-8 mb-12">
              <div className="">
                <Dropdown title={`Size`} ref={ref} width="235px">
                  <div className="absolute bg-white shadow-d rounded-lg mt-4 max-w-235px w-full z-10">
                    <div className="w-4 h-4 bg-white absolute right-4 -top-2 transform rotate-45"></div>
                    <div className="text-center pt-4 pb-3 border-b border-dark-surface">
                      <p className="text-base text-title">S</p>
                    </div>
                    <div className="text-center py-3 border-b border-dark-surface">
                      <p className="text-base text-title">M</p>
                    </div>
                    <div className="text-center py-3">
                      <p className="text-base text-title">L</p>
                    </div>
                  </div>
                </Dropdown>
              </div>
              <div className="">
                <Dropdown title={`Color`} ref={ref} width="235px">
                  <div className="absolute bg-white shadow-d rounded-lg mt-4 max-w-235px w-full z-10">
                    <div className="w-4 h-4 bg-white absolute right-4 -top-2 transform rotate-45"></div>
                    <div className="text-center pt-4 pb-3 border-b border-dark-surface">
                      <p className="text-base text-title">Black</p>
                    </div>
                    <div className="text-center py-3 border-b border-dark-surface">
                      <p className="text-base text-title">White</p>
                    </div>
                    <div className="text-center py-3">
                      <p className="text-base text-title">Red</p>
                    </div>
                  </div>
                </Dropdown>
              </div>
              <div className="">
                <div className="flex items-center">
                  <label htmlFor="num" className="text-xl text-title mr-6">
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 w-10 h-10 border border-dark-surface text-center"
                    placeholder="1"
                    id="num"
                  />
                </div>
              </div>
              <div className="">
                <Link to="/shopingcart">
                  <button className="w-full max-w-235px md:py-4 py-3 bg-dark-button rounded-lg md:text-lg sm:text-base text-sm font-bold text-white lg:hidden block relative">
                    {/* Spinner */}
                    <svg
                      className="animate-spin h-6 w-6 absolute sm:left-6 left-3"
                      viewBox="0 0 38 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="9.5"
                        cy="30.46"
                        rx="4.47"
                        ry="4.43"
                        fill="#fff"
                      />
                      <ellipse
                        cx="3.91"
                        cy="18.83"
                        rx="3.91"
                        ry="3.88"
                        fill="#fff"
                      />
                      <ellipse
                        cx="9.5"
                        cy="7.2"
                        rx="3.35"
                        ry="3.32"
                        fill="#fff"
                      />
                      <ellipse
                        cx="29.9"
                        cy="7.48"
                        rx="3.07"
                        ry="3.05"
                        fill="#fff"
                      />
                      <ellipse
                        cx="20.12"
                        cy="3.32"
                        rx="3.35"
                        ry="3.32"
                        fill="#fff"
                      />
                      <ellipse
                        cx="29.06"
                        cy="30.46"
                        rx="2.24"
                        ry="2.22"
                        fill="#fff"
                      />
                      <ellipse
                        cx="20.12"
                        cy="34.34"
                        rx="1.68"
                        ry="1.66"
                        fill="#fff"
                      />
                      <ellipse
                        cx="35.21"
                        cy="19.38"
                        rx="2.79"
                        ry="2.77"
                        fill="#fff"
                      />
                    </svg>
                    {/* Button Text */}
                    <span>Add to cart</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="">
              <h5 className="text-xl text-title font-medium md:mb-6 md:mb-4 mb-3">
                DESCRIPTION
              </h5>
              <p className="md:text-lg text-base text-title lg:leading-11 mb-10 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                duis mauris lacus fermentum pharetra viverra vestibulum ac nam.
                Commodo nunc amet duis nisi lacus neque.
              </p>
              <Link to="/shopingcart">
                <button className="xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 md:py-4 py-2 bg-dark-button rounded-lg md:text-lg text-base font-bold text-white lg:block hidden relative">
                  {/* Spinner */}
                  <svg
                    className="animate-spin h-7 w-7 absolute left-8"
                    viewBox="0 0 38 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="9.5"
                      cy="30.46"
                      rx="4.47"
                      ry="4.43"
                      fill="#fff"
                    />
                    <ellipse
                      cx="3.91"
                      cy="18.83"
                      rx="3.91"
                      ry="3.88"
                      fill="#fff"
                    />
                    <ellipse
                      cx="9.5"
                      cy="7.2"
                      rx="3.35"
                      ry="3.32"
                      fill="#fff"
                    />
                    <ellipse
                      cx="29.9"
                      cy="7.48"
                      rx="3.07"
                      ry="3.05"
                      fill="#fff"
                    />
                    <ellipse
                      cx="20.12"
                      cy="3.32"
                      rx="3.35"
                      ry="3.32"
                      fill="#fff"
                    />
                    <ellipse
                      cx="29.06"
                      cy="30.46"
                      rx="2.24"
                      ry="2.22"
                      fill="#fff"
                    />
                    <ellipse
                      cx="20.12"
                      cy="34.34"
                      rx="1.68"
                      ry="1.66"
                      fill="#fff"
                    />
                    <ellipse
                      cx="35.21"
                      cy="19.38"
                      rx="2.79"
                      ry="2.77"
                      fill="#fff"
                    />
                  </svg>

                  {/* Button Text */}
                  <span>Add to cart</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
export default ProductCartDetails;
