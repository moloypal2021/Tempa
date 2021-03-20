import React, { Component } from "react";
import Title from "../../component/categoryTitle/title";
import Filter from "../../component/categoryFilter/Filter";

export class Category extends Component {
  render() {
    return (
      <div>
        <Title />
        <Filter />
      </div>
    );
  }
}

export default Category;
