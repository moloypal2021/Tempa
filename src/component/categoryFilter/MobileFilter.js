import React, { useState, useEffect, useRef } from "react";

function MobileFilter(props) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div ref={ref}>
      <div className="flex justify-center">
        <button
          className="py-2 px-10 border border-dark-border text-base text-dark-title"
          onClick={() => setOpen(!open)}
        >
          FILTER
        </button>
      </div>
      {open && <PopUp onClick={() => setOpen(!open)} />}
    </div>
  );
}

function PopUp({ onClick }, props) {
  const [activeMenu, setActive] = useState("main");
  return (
    <div>
      {/* Mobile Filter PopUp Start */}
      <div className="absolute bg-dark-title bg-opacity-30 inset-0 z-50">
        <div className="flex items-start">
          {/* Toogle Close Button */}
          <button className="p-4 focus:outline-none h-8" onClick={onClick}>
            <svg
              width="32"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.667 5.333L5.333 26.668m21.334 0L5.333 5.333l21.334 21.334z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Menus Box */}
          <div className="w-full bg-white">
            {/* Main Menu */}
            {activeMenu === "main" && (
              <div className="mb-20">
                <div className="py-4 px-6 border-b border-dark-title flex items-center">
                  <button className="mr-2 transform scale-0 hidden">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 12H5M12 19l-7-7 7-7"
                        stroke="#000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <h5 className="text-lg text-dark-title font-bold">FILTER</h5>
                </div>
                {/* Menu List */}
                <div className="pl-6 ">
                  <div className="border-b border-dark-border py-4">
                    <h6
                      onClick={() => setActive("category")}
                      className="text-base text-dark-title"
                    >
                      Category
                    </h6>
                  </div>
                  <div className="border-b border-dark-border py-4">
                    <h6
                      onClick={() => setActive("style")}
                      className="text-base text-dark-title"
                    >
                      Style
                    </h6>
                  </div>
                  <div className="border-b border-dark-border py-4">
                    <h6
                      onClick={() => setActive("color")}
                      className="text-base text-dark-title"
                    >
                      Color
                    </h6>
                  </div>
                  <div className="border-b border-dark-border py-4">
                    <h6
                      onClick={() => setActive("size")}
                      className="text-base text-dark-title"
                    >
                      Size
                    </h6>
                  </div>
                  <div className="py-4">
                    <h6
                      onClick={() => setActive("price")}
                      className="text-base text-dark-title"
                    >
                      Price
                    </h6>
                  </div>
                </div>
              </div>
            )}

            {/* Category Menu */}
            {activeMenu === "category" && (
              <div className="mb-20">
                <div className="py-4 px-6 border-b border-dark-title flex items-center">
                  <button className="mr-2" onClick={() => setActive("main")}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 12H5M12 19l-7-7 7-7"
                        stroke="#000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <h5 className="text-lg text-dark-title font-bold">
                    Category
                  </h5>
                </div>
                {/* Menu List */}
                <div className="pl-6 ">
                  <div className="flex items-center py-4 border-b border-dark-surface">
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
                  <div className="flex items-center py-4 border-b border-dark-surface">
                    <input
                      type="checkbox"
                      className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                      id="wood"
                    />
                    <label className="text-lg text-dark-title" htmlFor="wood">
                      Wood
                    </label>
                  </div>
                  <div className="flex items-center py-4 border-b border-dark-surface">
                    <input
                      type="checkbox"
                      className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                      id="metal"
                    />
                    <label className="text-lg text-dark-title" htmlFor="metal">
                      Metal
                    </label>
                  </div>
                  <div className="flex items-center py-4 border-b border-dark-surface">
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
              </div>
            )}

            {/* Style Menu */}
            {activeMenu === "style" && (
              <div className="mb-20">
                <div className="py-4 px-6 border-b border-dark-title flex items-center">
                  <button className="mr-2" onClick={() => setActive("main")}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 12H5M12 19l-7-7 7-7"
                        stroke="#000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <h5 className="text-lg text-dark-title font-bold">Style</h5>
                </div>
                {/* Menu List */}
                <div className="pl-6 ">
                  <div className="flex items-center py-4 border-b border-dark-surface">
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
                  <div className="flex items-center py-4 border-b border-dark-surface">
                    <input
                      type="checkbox"
                      className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                      id="wood"
                    />
                    <label className="text-lg text-dark-title" htmlFor="wood">
                      Wood
                    </label>
                  </div>
                  <div className="flex items-center py-4 border-b border-dark-surface">
                    <input
                      type="checkbox"
                      className="rounded text-dark-title text-lg focus:ring-0 mr-3"
                      id="metal"
                    />
                    <label className="text-lg text-dark-title" htmlFor="metal">
                      Metal
                    </label>
                  </div>
                  <div className="flex items-center py-4 border-b border-dark-surface">
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
              </div>
            )}

            {/* View Items Button */}
            <div className="p-6">
              <button className="py-2 w-full bg-dark-button rounded-lg text-base text-white font-bold text-center">
                View items
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Filter PopUp End */}
    </div>
  );
}

export default MobileFilter;
