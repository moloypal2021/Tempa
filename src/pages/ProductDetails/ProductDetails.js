import React, { Component } from "react";
import ProductCartDetails from "../../component/productDetails/ProductCartDetails";
import PopularProduct from "../../component/popularProduct/PopularProduct";
import Category from "../../component/category/Category";

export class ProductDetails extends Component {
  render() {
    return (
      <div>
        <section className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 lg:block hidden">
          <div className="py-6 border-b border-dark-border">
            <h1 className="text-40px text-dark-title font-bold">Shop</h1>
          </div>
        </section>
        <ProductCartDetails />
        <PopularProduct />
        <Category />
      </div>
    );
  }
}

export default ProductDetails;
