import React, { useState, useEffect, useRef } from "react";

function Dropdown(props) {
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
    <div className="relative" ref={ref}>
      <button
        className="bg-white text-dark-title font-medium text-lg py-4 px-4 rounded inline-flex justify-center items-center w-310px relative"
        onClick={() => setOpen(!open)}
      >
        {props.title}
        <svg
          className="fill-current h-4 w-4 absolute right-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>

      {open && <DropdownMenu />}
    </div>
  );
}

function DropdownMenu() {
  return (
    <div>
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
    </div>
  );
}
export default Dropdown;
