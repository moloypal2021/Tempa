import React, { Component } from "react";
import Filter from "../../component/filter/Filter";
import ItemsContain from "../../component/items/ItemsContain";
import Item from "../../component/items/Item";

export default class ProductListing extends Component {
  render() {
    return (
      <div>
        <section className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 ">
          <div className="lg:py-11 md:py-10 sm:py-8 py-6">
            <h1 className="xl:text-40px lg:text-4xl md:text-3xl sm:text-2xl text-xl text-dark-title font-bold">
              Shop
            </h1>
          </div>
        </section>
        <Filter mobPosition="start" />
        <div className="sm:mx-0 -mx-6">
          <ItemsContain
            gridLg="4"
            gridMd="3"
            grid="2"
            lgGapX="8"
            GapX="4"
            GapY="12"
          >
            <Item xlH="360px" lgH="72" mdH="60" smH="56" H="200px" />
            <Item xlH="360px" lgH="72" mdH="60" smH="56" H="200px" />
            <Item xlH="360px" lgH="72" mdH="60" smH="56" H="200px" />
            <Item xlH="360px" lgH="72" mdH="60" smH="56" H="200px" />
            <Item xlH="360px" lgH="72" mdH="60" smH="56" H="200px" />
            <Item xlH="360px" lgH="72" mdH="60" smH="56" H="200px" />
            <Item xlH="360px" lgH="72" mdH="60" smH="56" H="200px" />
            <Item xlH="360px" lgH="72" mdH="60" smH="56" H="200px" />
          </ItemsContain>
        </div>
      </div>
    );
  }
}
