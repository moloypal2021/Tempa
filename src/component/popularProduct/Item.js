import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div>
        <figure className="xl:w-340px lg:w-64 md:w-60 sm:w-56 w-52">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-full xl:h-400px lg:h-80 md:h-72 sm:h-64 h-230px object-cover"
          />
          <div className="mt-4 text-center">
            <figcaption className="sm:text-lg text-base text-dark-title mb-2">
              Ceramic vase
            </figcaption>
            <p className="sm:text-lg text-base text-dark-title">50$</p>
          </div>
        </figure>
      </div>
    );
  }
}
