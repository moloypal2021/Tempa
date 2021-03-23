import React from "react";

const Snackbar = () => {
  return (
    <div>
      <div className="flex flex-row fixed sm:bottom-16 bottom-8 sm:left-8 left-4 mr-4 z-50">
        <div
          className="flex items-center bg-dark-title rounded shadow-card sm:px-8 px-3 py-3"
          role="alert"
        >
          <p className="md:text-lg sm:text-base text-sm text-white">
            The product has been added to your basket.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
