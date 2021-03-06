import React, { forwardRef } from "react";
import Dropdown from "../dropdown/Dropdown";
import MobileFilter from "./MobileFilter";
const Filter = forwardRef(({ open, setOpen, mobPosition }, ref) => {
  return (
    <div>
      <section className="sm:bg-dark-light">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 lg:py-8 md:py-7 sm:py-6 py-8 ">
          {/* Desktop Filter */}
          <div className="sm:block hidden ">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-8 py-8">
              {/* Catagory Dropdown */}
              <Dropdown
                title={`Catagory`}
                ref={ref}
                width="310px"
                addClass="flex justify-start"
              >
                <div className="absolute top-16 w-full z-10">
                  <div className="flex flex-row justify-center">
                    <div className="bg-white border mt-3 lg:w-310px md:w-60 sm:w-64 ">
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
                        <label
                          className="text-lg text-dark-title"
                          htmlFor="wood"
                        >
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
                        <label
                          className="text-lg text-dark-title"
                          htmlFor="clay"
                        >
                          Clay
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown>

              {/* Style Dropdown */}
              <Dropdown
                title={`Style`}
                ref={ref}
                width="310px"
                addClass="flex justify-start"
              >
                <div className="absolute top-16 w-full z-10">
                  <div className="flex flex-row justify-center">
                    <div className="bg-white border mt-3 lg:w-310px md:w-60 sm:w-64 ">
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
                        <label
                          className="text-lg text-dark-title"
                          htmlFor="wood"
                        >
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
                        <label
                          className="text-lg text-dark-title"
                          htmlFor="clay"
                        >
                          Clay
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown>

              {/* Color Dropdown */}
              <Dropdown
                title={`Color`}
                ref={ref}
                width="310px"
                addClass="flex justify-start"
              >
                <div className="absolute top-16 w-full z-10">
                  <div className="flex flex-row justify-center">
                    <div className="bg-white border mt-3 lg:w-310px md:w-60 sm:w-64 ">
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
                        <label
                          className="text-lg text-dark-title"
                          htmlFor="wood"
                        >
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
                        <label
                          className="text-lg text-dark-title"
                          htmlFor="clay"
                        >
                          Clay
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown>

              {/* Size Dropdown */}
              <Dropdown
                title={`Size`}
                ref={ref}
                width="310px"
                addClass="flex justify-start"
              >
                <div className="absolute top-16 w-full z-10">
                  <div className="flex flex-row justify-center">
                    <div className="bg-white border mt-3 lg:w-310px md:w-60 sm:w-64 ">
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
                        <label
                          className="text-lg text-dark-title"
                          htmlFor="wood"
                        >
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
                        <label
                          className="text-lg text-dark-title"
                          htmlFor="clay"
                        >
                          Clay
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown>

              {/* Price Dropdown */}
              <Dropdown
                title={`Price`}
                ref={ref}
                width="310px"
                addClass="flex justify-start"
              >
                <div className="absolute top-16 w-full z-10">
                  <div className="flex flex-row justify-center">
                    <div className="bg-white border mt-3 lg:w-310px md:w-60 sm:w-64 ">
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
                        <label
                          className="text-lg text-dark-title"
                          htmlFor="wood"
                        >
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
                        <label
                          className="text-lg text-dark-title"
                          htmlFor="clay"
                        >
                          Clay
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>

          {/* Mobile Filter */}
          <div className="sm:hidden block">
            <MobileFilter position={mobPosition} />
          </div>
        </div>
      </section>
    </div>
  );
});
export default Filter;
