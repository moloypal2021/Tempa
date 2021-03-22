import React from "react";
import { Link } from "react-router-dom";

function item(props) {
  return (
    <div>
      <Link to="/productdetails">
        <figure className="">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className={`w-full xl:h-${props.xlH} lg:h-${props.lgH} md:h-${props.mdH} sm:h-${props.smH} h-${props.H} object-cover`}
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
export default item;
