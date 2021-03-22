import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../SliderNav.css";
import Item from "./Item";

export default class ItemSlider extends Component {
  render() {
    return (
      <div>
        <OwlCarousel
          className="owl-theme"
          dots={false}
          autoWidth
          loop
          margin={60}
          nav
        >
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </OwlCarousel>
      </div>
    );
  }
}
