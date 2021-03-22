import React, { useState } from "react";

const CartInfo = () => {
  const [emailInputOpen, setEmailInputOpen] = useState();
  const [deliveryInputOpen, setDeliveryInputOpen] = useState();
  const [shippingInputOpen, setShippingInputOpen] = useState();

  const handleEmailInputOpen = () => {
    if (emailInputOpen) setEmailInputOpen(false);
    else setEmailInputOpen(true);
  };

  const handleDeliveryInputOpenClose = () => {
    if (deliveryInputOpen) setDeliveryInputOpen(false);
    else setDeliveryInputOpen(true);
  };

  const handleShippingInputOpenClose = () => {
    if (shippingInputOpen) setShippingInputOpen(false);
    else setShippingInputOpen(true);
  };

  return (
    <div>
      <div className="lg:border-b pb-8">
        <div className="flex flex-row justify-between">
          <h5
            onClick={() => handleEmailInputOpen()}
            className="sm:text-lg text-base font-medium text-dark-title md:mb-8 sm:mb-6 mb-4"
          >
            1. Contact information
          </h5>
          {emailInputOpen ? null : (
            <p onClick={() => handleDeliveryInputOpenClose()}>modify</p>
          )}
        </div>
        <div className={`${emailInputOpen ? "block" : "hidden"}`}>
          <input
            className="sm:text-base text-sm border border-dark-light-border rounded-sm px-3 sm:py-4 py-2 placeholder:text-dark-text-sub w-full"
            placeholder="Email"
          />
          <div className="flex justify-center md:py-6 py-4">
            <button
              onClick={() => handleEmailInputOpen()}
              className="xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 md:py-4 py-2 bg-dark-button rounded-lg md:text-lg text-base font-bold text-white"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="lg:border-b lg:pt-12 pb-8">
        <div className="flex flex-row justify-between">
          <h5
            onClick={() => handleDeliveryInputOpenClose()}
            className="sm:text-lg text-base font-medium text-dark-title md:mb-8 sm:mb-6 mb-4"
          >
            2. Delivery methods
          </h5>
          {deliveryInputOpen ? null : (
            <p onClick={() => handleDeliveryInputOpenClose()}>modify</p>
          )}
        </div>
        <div className={`${deliveryInputOpen ? "block" : "hidden"}`}>
          <div className="border border-dark-light-border divide-y">
            <div className="flex items-center px-6 sm:py-4 py-2">
              <input
                type="checkbox"
                className="custom-check sm:text-base text-sm"
                id="ship"
              />
              <label htmlFor="ship" className="sm:text-base text-sm">
                Ship
              </label>
              <p className="sm:text-base text-sm text-title-dark ml-auto">
                6,99$
              </p>
            </div>
            <div className="flex items-center px-6 sm:py-4 py-2">
              <input
                type="checkbox"
                className="custom-check sm:text-base text-sm"
                id="pick"
              />
              <label htmlFor="pick" className="sm:text-base text-sm">
                Pick up
              </label>
              <p className="sm:text-base text-sm text-title-dark ml-auto">
                4,99$
              </p>
            </div>
          </div>
          <div className="flex justify-center md:py-6 py-4">
            <button
              onClick={() => handleDeliveryInputOpenClose()}
              className="xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 md:py-4 py-2 bg-dark-button rounded-lg md:text-lg text-base font-bold text-white"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="lg:border-b lg:pt-12 pb-8">
        <div className="flex flex-row justify-between">
          <h5 className="sm:text-lg text-base font-medium text-dark-title md:mb-8 sm:mb-6 mb-4">
            3. Shipping address
          </h5>
          {shippingInputOpen ? null : (
            <p onClick={() => handleShippingInputOpenClose()}>modify</p>
          )}
        </div>

        <div className={`${shippingInputOpen ? "block" : "hidden"}`}>
          <input
            className="sm:text-base text-sm border border-dark-light-border rounded-sm px-3 sm:py-4 py-2 placeholder:text-dark-text-sub w-full mb-4"
            placeholder="John"
          />
          <input
            className="sm:text-base text-sm border border-dark-light-border rounded-sm px-3 sm:py-4 py-2 placeholder:text-dark-text-sub w-full mb-4"
            placeholder="Last Name"
          />
          <input
            className="sm:text-base text-sm border border-dark-light-border rounded-sm px-3 sm:py-4 py-2 placeholder:text-dark-text-sub w-full mb-4"
            placeholder="Address"
          />
          <input
            className="sm:text-base text-sm border border-dark-light-border rounded-sm px-3 sm:py-4 py-2 placeholder:text-dark-text-sub w-full mb-4"
            placeholder="Appartment, suite, ect. (optional)"
          />
          <input
            className="sm:text-base text-sm border border-dark-light-border rounded-sm px-3 sm:py-4 py-2 placeholder:text-dark-text-sub w-full mb-4"
            placeholder="Postal code"
          />
          <input
            className="sm:text-base text-sm border border-dark-light-border rounded-sm px-3 sm:py-4 py-2 placeholder:text-dark-text-sub w-full mb-4"
            placeholder="City"
          />
          <input
            className="sm:text-base text-sm border border-dark-light-border rounded-sm px-3 sm:py-4 py-2 placeholder:text-dark-text-sub w-full mb-4"
            placeholder="Country/Region"
          />
          <input
            className="sm:text-base text-sm border border-dark-light-border rounded-sm px-3 sm:py-4 py-2 placeholder:text-dark-text-sub w-full mb-4"
            placeholder="Phone number"
          />
          <div className="mt-2">
            <input type="checkbox" className="custom-check" id="save" />
            <label htmlFor="save" className="sm:text-base text-sm">
              Save this information for the next time
            </label>
          </div>
          <div className="flex justify-center md:py-6 py-4">
            <button
              onClick={() => handleShippingInputOpenClose()}
              className="xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 md:py-4 py-2 bg-dark-button rounded-lg md:text-lg text-base font-bold text-white"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="lg:py-12">
        <h5 className="sm:text-lg text-base font-medium text-dark-title md:mb-8 sm:mb-6 mb-4">
          4. Payment
        </h5>
        <div className="border border-dark-light-border divide-y">
          <div className="flex items-center px-6 sm:py-4 py-2">
            <input type="checkbox" className="custom-check" id="card" />
            <label htmlFor="card" className="sm:text-base text-sm">
              Credit card
            </label>
            <div className="flex items-center ml-auto">
              <div className="mr-3">
                <svg
                  className="sm:w-12 sm:h-8 w-10 h-7"
                  viewBox="0 0 50 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M9.539 34.652v-2.246c0-.862-.58-1.423-1.574-1.423-.497 0-1.036.15-1.409.636-.29-.411-.704-.636-1.325-.636-.415 0-.828.112-1.16.524v-.45h-.87v3.595h.87v-1.984c0-.637.373-.936.953-.936s.87.337.87.936v1.984h.87v-1.984c0-.637.413-.936.952-.936.58 0 .87.337.87.936v1.984h.953zm12.881-3.594h-1.408v-1.086h-.87v1.086h-.787v.711h.787v1.647c0 .824.373 1.31 1.367 1.31a2.51 2.51 0 001.077-.261l-.248-.674c-.249.15-.539.187-.746.187-.414 0-.58-.225-.58-.6V31.77h1.408v-.711zm7.373-.075c-.497 0-.828.225-1.035.524v-.45h-.87v3.595h.87V32.63c0-.599.29-.936.828-.936.166 0 .373.038.539.075l.248-.748c-.166-.038-.414-.038-.58-.038zm-11.142.374c-.414-.262-.994-.374-1.615-.374-.994 0-1.657.45-1.657 1.16 0 .6.497.936 1.367 1.049l.414.037c.456.075.704.187.704.375 0 .262-.331.449-.911.449-.58 0-1.036-.187-1.326-.374l-.414.598c.456.3 1.077.45 1.698.45 1.16 0 1.823-.487 1.823-1.16 0-.637-.539-.974-1.367-1.087l-.414-.037c-.373-.037-.663-.112-.663-.337 0-.262.29-.412.746-.412.497 0 .994.187 1.242.3l.373-.637zm23.113-.374c-.497 0-.829.225-1.036.524v-.45h-.87v3.595h.87V32.63c0-.599.29-.936.829-.936.165 0 .373.038.538.075l.249-.748c-.166-.038-.414-.038-.58-.038zm-11.1 1.872c0 1.086.827 1.872 2.112 1.872.58 0 .994-.113 1.408-.412l-.414-.636c-.332.224-.663.336-1.036.336-.704 0-1.201-.449-1.201-1.16 0-.674.497-1.123 1.201-1.16.373 0 .704.111 1.036.336l.414-.636c-.414-.3-.828-.412-1.408-.412-1.285 0-2.113.786-2.113 1.872zm8.035 0v-1.797h-.87v.45c-.29-.338-.704-.525-1.243-.525-1.118 0-1.988.786-1.988 1.872s.87 1.872 1.988 1.872c.58 0 .995-.187 1.243-.524v.449h.87v-1.797zm-3.19 0c0-.637.456-1.16 1.202-1.16.704 0 1.2.486 1.2 1.16 0 .636-.496 1.16-1.2 1.16-.746-.037-1.202-.524-1.202-1.16zm-10.396-1.872c-1.16 0-1.988.749-1.988 1.872 0 1.123.828 1.872 2.03 1.872.579 0 1.159-.15 1.615-.487l-.415-.562a2.114 2.114 0 01-1.16.375c-.538 0-1.076-.225-1.2-.861h2.94v-.3c.042-1.16-.704-1.909-1.822-1.909zm0 .674c.538 0 .911.3.994.861h-2.071c.083-.487.455-.861 1.077-.861zm21.58 1.198v-3.22h-.87v1.872c-.29-.337-.704-.524-1.242-.524-1.119 0-1.989.786-1.989 1.872s.87 1.872 1.989 1.872c.58 0 .994-.187 1.242-.524v.449h.87v-1.797zm-3.19 0c0-.637.456-1.16 1.202-1.16.704 0 1.201.486 1.201 1.16 0 .636-.497 1.16-1.201 1.16-.746-.037-1.201-.524-1.201-1.16zm-29.077 0v-1.797h-.87v.45c-.29-.338-.704-.525-1.242-.525-1.119 0-1.989.786-1.989 1.872s.87 1.872 1.989 1.872c.58 0 .994-.187 1.242-.524v.449h.87v-1.797zm-3.23 0c0-.637.455-1.16 1.2-1.16.705 0 1.202.486 1.202 1.16 0 .636-.497 1.16-1.202 1.16-.745-.037-1.2-.524-1.2-1.16z"
                      fill="#000"
                    />
                    <path
                      d="M18.36 3.766h13.047v21.189H18.359V3.765z"
                      fill="#FF5F00"
                    />
                    <path
                      d="M19.188 14.36c0-4.304 2.237-8.123 5.675-10.594C22.336 1.969 19.147.883 15.668.883 7.425.883.756 6.911.756 14.361s6.669 13.477 14.911 13.477c3.48 0 6.669-1.086 9.196-2.883-3.438-2.433-5.675-6.29-5.675-10.594z"
                      fill="#EB001B"
                    />
                    <path
                      d="M49.011 14.36c0 7.45-6.669 13.478-14.911 13.478-3.48 0-6.669-1.086-9.196-2.883 3.48-2.47 5.675-6.29 5.675-10.594 0-4.306-2.237-8.124-5.675-10.595C27.431 1.969 30.62.883 34.1.883c8.242 0 14.911 6.065 14.911 13.478z"
                      fill="#F79E1B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path
                        fill="#fff"
                        transform="translate(.756 .883)"
                        d="M0 0h48.303v33.937H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="">
                <svg
                  className="sm:w-12 sm:h-8 w-10 h-7"
                  viewBox="0 0 58 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M30.003 6c-.032 2.354 2.27 3.667 4.005 4.449 1.782.801 2.38 1.315 2.374 2.032-.014 1.097-1.422 1.58-2.74 1.6-2.299.032-3.636-.574-4.698-1.033l-.828 3.582c1.066.454 3.04.85 5.087.867 4.806 0 7.95-2.192 7.968-5.591.018-4.315-6.457-4.553-6.413-6.482.015-.584.619-1.208 1.942-1.367.655-.08 2.462-.141 4.511.73l.805-3.465c-1.102-.37-2.519-.726-4.282-.726-4.524 0-7.705 2.223-7.73 5.403zM49.745.894c-.878 0-1.617.473-1.947 1.199l-6.865 15.148h4.802l.956-2.44h5.868l.554 2.44h4.233L53.653.895h-3.908zm.672 4.416l1.386 6.139h-3.796l2.41-6.139zM24.18.895l-3.785 16.347h4.576L28.755.895H24.18zm-6.77 0l-4.762 11.127L10.72 2.56C10.495 1.505 9.6.895 8.61.895H.823l-.11.475c1.6.32 3.416.837 4.516 1.39.673.338.865.634 1.086 1.437l3.65 13.045h4.836L22.216.895h-4.805"
                      fill="url(#paint0_linear)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="26.75"
                      y1="17.836"
                      x2="27.203"
                      y2=".477"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#222357" />
                      <stop offset="1" stopColor="#254AA5" />
                    </linearGradient>
                    <clipPath id="clip0">
                      <path
                        fill="#fff"
                        transform="translate(.715 .596)"
                        d="M0 0h56.631v16.968H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="py-3 px-5">
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="">
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1416 11.9526H5.59583C4.3693 11.9526 3.375 12.8735 3.375 14.0094V21.2082C3.375 22.3441 4.3693 23.2649 5.59583 23.2649H21.1416C22.3682 23.2649 23.3625 22.3441 23.3625 21.2082V14.0094C23.3625 12.8735 22.3682 11.9526 21.1416 11.9526Z"
                      stroke="#767676"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.81641 11.9523V7.83873C7.81641 6.475 8.40136 5.16713 9.44257 4.20282C10.4838 3.23852 11.896 2.69678 13.3685 2.69678C14.841 2.69678 16.2532 3.23852 17.2944 4.20282C18.3356 5.16713 18.9206 6.475 18.9206 7.83873V11.9523"
                      stroke="#767676"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="border border-dark-light-border rounded-sm bg-dark-light px-3 sm:py-4 py-2 placeholder:text-sub w-full sm:mb-4 mb-3"
                placeholder="Card number"
              />
            </div>
            <input
              className="border border-dark-light-border rounded-sm bg-dark-light px-3 sm:py-4 py-2 placeholder:text-sub w-full sm:mb-4 mb-3"
              placeholder="Name on card"
            />
            <input
              className="border border-dark-light-border rounded-sm bg-dark-light px-3 sm:py-4 py-2 placeholder:text-sub w-full sm:mb-4 mb-3"
              placeholder="Expiration date (MM / YY)"
            />
            <input
              className="border border-dark-light-border rounded-sm bg-dark-light px-3 sm:py-4 py-2 placeholder:text-sub w-full"
              placeholder="Security code"
            />
          </div>
          <div className="flex items-center px-6 sm:py-4 py-2">
            <input type="checkbox" className="custom-check" id="ideal" />
            <label htmlFor="ideal" className="sm:text-base text-sm">
              iDEAL
            </label>
            <div className="ml-auto">
              <svg
                className="sm:w-12 sm:h-8 w-10 h-7"
                viewBox="0 0 58 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M30.003 6c-.032 2.354 2.27 3.667 4.005 4.449 1.782.801 2.38 1.315 2.374 2.032-.014 1.097-1.422 1.58-2.74 1.6-2.299.032-3.636-.574-4.698-1.033l-.828 3.582c1.066.454 3.04.85 5.087.867 4.806 0 7.95-2.192 7.968-5.591.018-4.315-6.457-4.553-6.413-6.482.015-.584.619-1.208 1.942-1.367.655-.08 2.462-.141 4.511.73l.805-3.465c-1.102-.37-2.519-.726-4.282-.726-4.524 0-7.705 2.223-7.73 5.403zM49.745.894c-.878 0-1.617.473-1.947 1.199l-6.865 15.148h4.802l.956-2.44h5.868l.554 2.44h4.233L53.653.895h-3.908zm.672 4.416l1.386 6.139h-3.796l2.41-6.139zM24.18.895l-3.785 16.347h4.576L28.755.895H24.18zm-6.77 0l-4.762 11.127L10.72 2.56C10.495 1.505 9.6.895 8.61.895H.823l-.11.475c1.6.32 3.416.837 4.516 1.39.673.338.865.634 1.086 1.437l3.65 13.045h4.836L22.216.895h-4.805"
                    fill="url(#paint0_linear)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="26.75"
                    y1="17.836"
                    x2="27.203"
                    y2=".477"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#222357" />
                    <stop offset="1" stopColor="#254AA5" />
                  </linearGradient>
                  <clipPath id="clip0">
                    <path
                      fill="#fff"
                      transform="translate(.715 .596)"
                      d="M0 0h56.631v16.968H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
