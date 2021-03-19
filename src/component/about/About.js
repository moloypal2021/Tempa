import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section>
          <figure
            className="w-full bg-cover"
            style={{
              backgroundImage: `url("https://source.unsplash.com/M74q3kQVeMA")`,
            }}
          >
            <div className="container mx-auto sm:px-6 lg:px-8 xl:px-10">
              <figcaption className="xl:text-40px lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-white xl:leading-60px xl:py-56 lg:py-48 md:py-40 sm:py-32 py-24 text-center">
                About us
              </figcaption>
            </div>
          </figure>
          <div className="container mx-auto sm:px-6 lg:px-8 xl:px-10 lg:pt-12 md:pt-10 sm:pt-8 pt-6 xl:pb-28 lg:pb-24 md:pb-20 sm:pb-16 pb-14">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="lg:text-lg text-base text-dark-title lg:leading-11 md:mb-8 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                duis mauris lacus fermentum pharetra viverra vestibulum ac nam.
                Commodo nunc amet duis nisi lacus neque. <br />
                Nullam duis mauris lacus fermentum pharetra viverra vestibulum
                ac nam. Commodo nunc amet duis nisi lacus neque. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nullam duis mauris
                lacus fermentum pharetra viverra vestibulum ac nam. Commodo nunc
                amet duis nisi lacus neque.
              </p>
              <button className="xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 md:py-4 py-2 bg-dark-button rounded-lg md:text-lg text-base font-bold text-white">
                Shop now
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
