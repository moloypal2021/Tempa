import React from "react";
function ItemsContain(props) {
  return (
    <div>
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 xl:pt-16 lg:pt-12 md:pt-10 sm:pt-8 py-4 xl:pb-24 lg:pb-20 md:pb-16 sm:pb-12 pb-10">
        <div
          className={`grid xl:grid-cols-${props.gridXl} lg:grid-cols-${props.gridLg} md:grid-cols-${props.gridMd} sm:grid-cols-${props.gridSm} grid-cols-${props.grid} lg:gap-x-${props.lgGapX} gap-x-${props.GapX} gap-y-${props.GapY}`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
export default ItemsContain;
