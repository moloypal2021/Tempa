import React, { Component } from "react";

export default class HerosContent extends Component {
  render() {
    return (
      <div>
        <section className="w-full bg-dark-surface">
          <div className="container mx-auto sm:px-6 lg:px-8 xl:px-10">
            <h1 className="lg:text-2xl md:text-xl sm:text-lg text-base text-dark-title lg:leading-11 xl:py-24 lg:py-20 md:py-18 sm:py-16 py-12 text-center max-w-7xl mx-auto px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </h1>
          </div>
        </section>
      </div>
    );
  }
}
