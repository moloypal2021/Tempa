import React, { Component } from "react";

export default class Heros extends Component {
  render() {
    return (
      <div>
        <section
          className="w-full bg-cover"
          style={{
            backgroundImage: `url("https://source.unsplash.com/KZZJLCw7V0M")`,
          }}
        >
          <div className="container mx-auto sm:px-6 lg:px-8 xl:px-10">
            <h1 className="xl:text-40px lg:text-3xl md:text-2xl sm:text-xl text-base font-bold text-white xl:leading-60px xl:py-72 lg:py-64 md:py-48 sm:py-32 py-24 lg:max-w-598px md:max-w-md sm:max-w-sm max-w-188px ml-auto md:text-right text-center mx-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
          </div>
        </section>
      </div>
    );
  }
}
