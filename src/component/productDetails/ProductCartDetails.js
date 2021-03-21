import React, { Component } from "react";

export default class ProductCartDetails extends Component {
  render() {
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
              <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-title lg:font-bold lg:text-left text-center xl:mb-12 lg:mb-10 md:mb-8 sm:mb-6 mb-4">
                50$
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
