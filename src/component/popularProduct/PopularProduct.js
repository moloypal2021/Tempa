import React, { Component } from "react";
import ItemSlider from "./ItemSlider";

export default class PopularProduct extends Component {
  render() {
    return (
      <div>
        <section className="pr-0 pl-6 sm:pl-8 lg:pl-10 xl:pl-12 lg:pt-24 md:pt-18 sm:pt-14 pt-9 lg:pb-14 md:pb-12 sm:pb-10 pb-6">
          <h3 className="lg:text-2xl sm:text-xl text-lg font-bold text-title lg:mb-12 md:mb-10 mb-8">
            Popular Product
          </h3>
          <ItemSlider />
        </section>
      </div>
    );
  }
}
