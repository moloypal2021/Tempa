import React, { Component } from "react";
import ItemSlider from "./ItemSlider";

export default class Category extends Component {
  render() {
    return (
      <div>
        <section className="pr-0 pl-6 sm:pl-8 lg:pl-10 xl:pl-12 lg:pt-14 md:pt-12 sm:pt-10 pt-9 lg:pb-24 md:pb-20 sm:pb-16 pb-10">
          <h3 className="lg:text-2xl sm:text-xl text-lg font-bold text-dark-title lg:mb-12 md:mb-10 mb-8">
            Popular Product
          </h3>
          <ItemSlider />
        </section>
      </div>
    );
  }
}
