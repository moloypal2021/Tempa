import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Slider.css";
export default class Slider extends Component {
  render() {
    return (
      <div>
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay
          dots
          items={1}
          margin={10}
        >
          <div className="item w-auto h-800px">
            <img
              src="https://source.unsplash.com/x04UenhOSPE"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="item w-auto h-800px">
            <img
              src="https://source.unsplash.com/FlWT15cO2xQ"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="item w-auto h-800px">
            <img
              src="https://source.unsplash.com/A4YhZ3Fe6rA"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* <div className="owl-dots -mt-64">
            <div className="owl-dot active">
              <span></span>
            </div>
            <div className="owl-dot">
              <span></span>
            </div>
            <div className="owl-dot">
              <span></span>
            </div>
          </div> */}
        </OwlCarousel>
      </div>
    );
  }
}
