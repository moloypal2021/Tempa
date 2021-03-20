import React from "react";
import Item from "./Item";
function ItemsContain(props) {
  return (
    <div>
      <div className="container mx-auto px-12 lg:px-8 xl:px-10 xl:pt-16 lg:pt-12 md:pt-10 sm:pt-8 py-4 xl:pb-24 lg:pb-20 md:pb-16 sm:pb-12 pb-10">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-16 gap-x-10 gap-y-12">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}
export default ItemsContain;
