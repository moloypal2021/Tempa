import React, { Component } from "react";
import Title from "../../component/categoryTitle/Title";
import Filter from "../../component/filter/Filter";
import ItemsContain from "../../component/items/ItemsContain";
import Item from "../../component/items/Item";

export class Category extends Component {
  render() {
    return (
      <div>
        <Title title="Ceramic Collection" />
        <Filter mobPosition="center" />
        <ItemsContain
          gridLg="3"
          gridSm="2"
          grid="1"
          lgGapX="16"
          GapX="8"
          smGapY="12"
          GapY="8"
        >
          <Item xlH="460px" lgH="96" mdH="80" smH="360px" H="300px" />
          <Item xlH="460px" lgH="96" mdH="80" smH="360px" H="300px" />
          <Item xlH="460px" lgH="96" mdH="80" smH="360px" H="300px" />
          <Item xlH="460px" lgH="96" mdH="80" smH="360px" H="300px" />
          <Item xlH="460px" lgH="96" mdH="80" smH="360px" H="300px" />
          <Item xlH="460px" lgH="96" mdH="80" smH="360px" H="300px" />
        </ItemsContain>
      </div>
    );
  }
}

export default Category;
