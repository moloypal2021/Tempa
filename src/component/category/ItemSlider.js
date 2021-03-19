import React, { Component } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Item from "./Item";
export default class ItemSlider extends Component {
  render() {
    return (
      <div>
        <ScrollContainer className="scroll-container flex xl:space-x-14 lg:space-x-12 md:space-x-10 sm:space-x-8 space-x-5  w-full overflow-x-scroll hide-scrollbar">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ScrollContainer>
      </div>
    );
  }
}
