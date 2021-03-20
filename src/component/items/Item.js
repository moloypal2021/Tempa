import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class item extends Component {
  render() {
    return (
      <div>
        <Link to="/productdetails">
          <figure className="">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="w-full xl:h-460px lg:h-80 md:h-72 sm:h-64 h-230px object-cover"
            />
            <div className="mt-2 text-center">
              <figcaption className="sm:text-lg text-base text-dark-title sm:leading-11">
                Ceramic vase
              </figcaption>
              <p className="sm:text-lg text-base text-dark-title sm:leading-11">
                50$
              </p>
            </div>
          </figure>
        </Link>
      </div>
    );
  }
}
