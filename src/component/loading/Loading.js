import React from "react";

const Loading = (props) => {
  return (
    <div>
      <div className="fixed inset-0 bg-dark-light bg-opacity-60 h-full z-50 hidden">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <span className="">
              <svg
                className="animate-spin spin-slow lg:w-32 md:w-28 sm:w-24 w-20 lg:h-32 md:h-28 sm:h-24 h-20 mx-auto"
                viewBox="0 0 134 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="33.5001"
                  cy="107.462"
                  rx="15.7647"
                  ry="15.6308"
                  fill="black"
                />
                <ellipse
                  cx="13.7941"
                  cy="66.4301"
                  rx="13.7941"
                  ry="13.6769"
                  fill="black"
                />
                <ellipse
                  cx="33.5003"
                  cy="25.4001"
                  rx="11.8235"
                  ry="11.7231"
                  fill="black"
                />
                <ellipse
                  cx="105.427"
                  cy="26.3767"
                  rx="10.8382"
                  ry="10.7462"
                  fill="black"
                />
                <ellipse
                  cx="70.9407"
                  cy="11.7231"
                  rx="11.8235"
                  ry="11.7231"
                  fill="black"
                />
                <ellipse
                  cx="102.471"
                  cy="107.461"
                  rx="7.88235"
                  ry="7.81538"
                  fill="black"
                />
                <ellipse
                  cx="70.942"
                  cy="121.139"
                  rx="5.91177"
                  ry="5.86155"
                  fill="black"
                />
                <ellipse
                  cx="124.147"
                  cy="68.3842"
                  rx="9.85294"
                  ry="9.76923"
                  fill="black"
                />
              </svg>
            </span>
            <h2 className="md:text-3xl text-2xl font-bold text-dark-title pt-8">
              LOADING
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
