import React from "react";

const Pagination = () => {
  return (
    <div>
      <div className="flex flex-col items-center pt-8">
        <div className="flex  justify-center text-dark-title">
          <div className="h-8 w-8 mr-1 flex justify-center items-center  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left w-4 h-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <div className="flex h-8 text-lg">
            <div className="font-bold w-8 sm:flex justify-center items-center hidden  cursor-pointer leading-5">
              1
            </div>
            <div className="w-8 sm:flex justify-center items-center hidden  cursor-pointer leading-5">
              2
            </div>
            <div className="w-8 sm:flex justify-center items-center hidden  cursor-pointer leading-5">
              3
            </div>
            <div className="w-8 sm:flex justify-center items-center hidden  cursor-pointer leading-5">
              4
            </div>
            <div className="w-8 sm:flex justify-center items-center hidden  cursor-pointer leading-5">
              ...
            </div>
            <div className="w-8 sm:flex justify-center items-center hidden  cursor-pointer leading-5">
              8
            </div>
            <div className="w-8 h-8 sm:hidden flex justify-center items-center cursor-pointer leading-5">
              2
            </div>
          </div>
          <div className="h-8 w-8 ml-1 flex justify-center items-center  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right w-4 h-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
