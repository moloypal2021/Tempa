import React, { forwardRef } from "react";
import Dropdown from "../dropdown/Dropdown";
const ProductCartDetails = forwardRef(({ open, setOpen }, ref) => {
  return (
    <div>
      <section className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 xl:py-16 lg:py-12 md:py-10 sm:py-8 py-7">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Items Image Slider */}
          <div className=""></div>

          {/* Cart Details */}
          <div className="">
            <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-title lg:font-bold lg:text-left text-center lg:mb-8 md:mb-6 sm:mb-4 mb-2">
              Ceramic Vase
            </h2>
            <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-title lg:text-left text-center xl:mb-12 lg:mb-10 md:mb-8 sm:mb-6 mb-4">
              50$
            </h2>
            <div className="grid grid-cols-2 gap-16">
              <div className="">
                <Dropdown title={`Catagory`} ref={ref} width="235px">
                  <div className="absolute bg-white shadow mt-4 max-w-235px w-full z-10">
                    <div className="w-4 h-4 bg-red-600 absolute right-2 -top-2"></div>
                    <div className="flex items-center p-5 border-b border-dark-surface">
                      <input
                        type="checkbox"
                        className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                        id="ceramic"
                      />
                      <label
                        className="text-lg text-dark-title"
                        htmlFor="ceramic"
                      >
                        Ceramic
                      </label>
                    </div>
                    <div className="flex items-center p-5 border-b border-dark-surface">
                      <input
                        type="checkbox"
                        className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                        id="wood"
                      />
                      <label className="text-lg text-dark-title" htmlFor="wood">
                        Wood
                      </label>
                    </div>
                    <div className="flex items-center p-5 border-b border-dark-surface">
                      <input
                        type="checkbox"
                        className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                        id="metal"
                      />
                      <label
                        className="text-lg text-dark-title"
                        htmlFor="metal"
                      >
                        Metal
                      </label>
                    </div>
                    <div className="flex items-center p-5 border-b border-dark-surface">
                      <input
                        type="checkbox"
                        className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                        id="clay"
                      />
                      <label className="text-lg text-dark-title" htmlFor="clay">
                        Clay
                      </label>
                    </div>
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
export default ProductCartDetails;
