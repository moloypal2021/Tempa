import React, { Component, forwardRef } from "react";
import "./filter.css";
import Dropdown from "./Dropdown";
const Filter = forwardRef(({ open, setOpen }, ref) => {
  return (
    <div>
      <section className="bg-dark-light lg:my-16 md:my-12 sm:my-10 my-8 h-400px">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex py-8">
            <Dropdown title={`Catagory`} ref={ref}></Dropdown>
            <Dropdown title={`btn`} ref={ref}></Dropdown>
          </div>
        </div>
      </section>
    </div>
  );
});
export default Filter;
