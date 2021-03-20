import React, { Component, forwardRef } from "react";
import "./filter.css";
import Dropdown from "./Dropdown";
const Filter = forwardRef(({ open, setOpen }, ref) => {
  return (
    <div>
      <section className="bg-dark-light lg:my-16 md:my-12 sm:my-10 my-8">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-3 gap-8 py-8">
            {/* Catagory Dropdown */}
            <Dropdown title={`Catagory`} ref={ref}>
              <div className="absolute bg-white mt-3 w-310px z-10">
                <div className="flex items-center p-5 border-b border-dark-surface">
                  <input
                    type="checkbox"
                    className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                    id="ceramic"
                  />
                  <label className="text-lg text-dark-title" htmlFor="ceramic">
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
                  <label className="text-lg text-dark-title" htmlFor="metal">
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

            {/* Style Dropdown */}
            <Dropdown title={`Style`} ref={ref}>
              <div className="absolute bg-white mt-3 w-310px z-10">
                <div className="flex items-center p-5 border-b border-dark-surface">
                  <input
                    type="checkbox"
                    className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                    id="ceramic"
                  />
                  <label className="text-lg text-dark-title" htmlFor="ceramic">
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
                  <label className="text-lg text-dark-title" htmlFor="metal">
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

            {/* Color Dropdown */}
            <Dropdown title={`Color`} ref={ref}>
              <div className="absolute bg-white mt-3 w-310px z-10">
                <div className="flex items-center p-5 border-b border-dark-surface">
                  <input
                    type="checkbox"
                    className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                    id="ceramic"
                  />
                  <label className="text-lg text-dark-title" htmlFor="ceramic">
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
                  <label className="text-lg text-dark-title" htmlFor="metal">
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

            {/* Size Dropdown */}
            <Dropdown title={`Size`} ref={ref}>
              <div className="absolute bg-white mt-3 w-310px z-10">
                <div className="flex items-center p-5 border-b border-dark-surface">
                  <input
                    type="checkbox"
                    className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                    id="ceramic"
                  />
                  <label className="text-lg text-dark-title" htmlFor="ceramic">
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
                  <label className="text-lg text-dark-title" htmlFor="metal">
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

            {/* Price Dropdown */}
            <Dropdown title={`Price`} ref={ref}>
              <div className="absolute bg-white mt-3 w-310px z-10">
                <div className="flex items-center p-5 border-b border-dark-surface">
                  <input
                    type="checkbox"
                    className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                    id="ceramic"
                  />
                  <label className="text-lg text-dark-title" htmlFor="ceramic">
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
                  <label className="text-lg text-dark-title" htmlFor="metal">
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
      </section>
    </div>
  );
});
export default Filter;
