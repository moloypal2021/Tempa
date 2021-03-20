import React, { Component } from "react";
import Title from "../../component/categoryTitle/title";
import Filter from "../../component/filter/Filter";
import ItemsContain from "../../component/items/ItemsContain";

export class Category extends Component {
  render() {
    return (
      <div>
        <Title />
        <Filter />
        <ItemsContain />
      </div>
    );
  }
}

export default Category;
