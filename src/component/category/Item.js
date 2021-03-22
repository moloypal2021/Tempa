import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Item extends Component {
  render() {
    return (
      <div>
        <Link to="/category">
          <figure
            className="xl:w-260px lg:w-64 md:w-60 sm:w-56 w-52 xl:h-360px lg:h-72 md:h-64 sm:h-56 h-196px bg-cover bg-center flex items-center justify-center shadow-card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("https://source.unsplash.com/random")`,
            }}
          >
            <figcaption className="lg:text-2xl sm:text-xl text-lg text-white font-bold leading-8">
              Glass
            </figcaption>
          </figure>
        </Link>
      </div>
    );
  }
}
