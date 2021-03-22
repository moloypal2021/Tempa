import React from "react";

function Title(props) {
  return (
    <div>
      <section className="bg-dark-accent">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10">
          <h1 className="xl:text-40px lg:text-3xl md:text-2xl sm:text-xl text-base font-bold text-white text-center xl:py-34 lg:py-28 md:py-24 sm:py-20 py-24">
            {props.title}
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Title;
