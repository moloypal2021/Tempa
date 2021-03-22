import React from "react";
import Pagination from "../pagination/Pagination";
function ItemsContain(props) {
  return (
    <div>
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 xl:pt-16 lg:pt-12 md:pt-10 sm:pt-8 py-4 xl:pb-20 lg:pb-16 md:pb-14 sm:pb-12 pb-10">
        <div
          className={`grid xl:grid-cols-${props.gridXl} lg:grid-cols-${props.gridLg} md:grid-cols-${props.gridMd} sm:grid-cols-${props.gridSm} grid-cols-${props.grid} lg:gap-x-${props.lgGapX} gap-x-${props.GapX} gap-y-${props.GapY}`}
        >
          {props.children}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
export default ItemsContain;
