import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark-accent">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 xl:py-18 lg:py-16 md:py-12 sm:py-10 py-8">
            <div className="flex justify-between">
              <div className="pr-8">
                <a
                  href="{#}"
                  className="lg:text-lg sm:text-base text-sm text-white block lg:leading-11 mb-4"
                >
                  Shop
                </a>
                <a
                  href="{#}"
                  className="lg:text-lg sm:text-base text-sm text-white block lg:leading-11 mb-4"
                >
                  About
                </a>
                <a
                  href="{#}"
                  className="lg:text-lg sm:text-base text-sm text-white block lg:leading-11 mb-4"
                >
                  Contact
                </a>
              </div>
              <div className="pr-8">
                <a
                  href="{#}"
                  className="lg:text-lg sm:text-base text-sm text-white block lg:leading-11 mb-4"
                >
                  General enquires
                </a>
                <a
                  href="{#}"
                  className="lg:text-lg sm:text-base text-sm text-white block lg:leading-11 mb-4"
                >
                  Help
                </a>
              </div>
              <div className="pr-8">
                <a
                  href="{#}"
                  className="lg:text-lg sm:text-base text-sm text-white block lg:leading-11 mb-4"
                >
                  <svg
                    className="md:w-8 md:h-8 w-6 h-6"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.5 3.5h-23c-.553 0-1 .447-1 1v23c0 .553.447 1 1 1h23c.553 0 1-.447 1-1v-23c0-.553-.447-1-1-1zm-1 23h-5.753v-7.681h3.25l.487-3.772h-3.737v-2.41c0-1.093.303-1.837 1.869-1.837h1.997V7.425c-.347-.047-1.532-.15-2.913-.15-2.881 0-4.853 1.76-4.853 4.987v2.782H13.59v3.772h3.259V26.5H5.5v-21h21v21z"
                      fill="#fff"
                    />
                  </svg>
                </a>
                <a
                  href="{#}"
                  className="lg:text-lg sm:text-base text-sm text-white block lg:leading-11 mb-4"
                >
                  <svg
                    className="md:w-8 md:h-8 w-6 h-6"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.953 1.421c1.564-.072 2.063-.088 6.047-.088 3.984 0 4.483.018 6.045.089 1.563.07 2.63.32 3.563.68.977.37 1.864.948 2.597 1.694a7.164 7.164 0 011.691 2.596c.363.933.61 2 .683 3.56.072 1.567.088 2.066.088 6.048 0 3.984-.018 4.483-.088 6.047-.071 1.56-.32 2.627-.683 3.56a7.195 7.195 0 01-1.69 2.599 7.191 7.191 0 01-2.598 1.69c-.933.363-2 .61-3.56.683-1.565.072-2.064.088-6.048.088s-4.483-.018-6.047-.088c-1.56-.07-2.626-.32-3.56-.683a7.196 7.196 0 01-2.598-1.69 7.189 7.189 0 01-1.692-2.598c-.362-.933-.61-2-.682-3.56-.072-1.566-.088-2.065-.088-6.048 0-3.984.018-4.482.088-6.045.071-1.563.32-2.63.682-3.563a7.195 7.195 0 011.693-2.597 7.19 7.19 0 012.596-1.692c.933-.362 2-.61 3.56-.682h.001zm11.974 2.64c-1.547-.07-2.011-.085-5.927-.085-3.916 0-4.38.015-5.927.085-1.43.066-2.206.304-2.724.506a4.554 4.554 0 00-1.686 1.096 4.55 4.55 0 00-1.096 1.686c-.202.518-.44 1.294-.506 2.724-.07 1.547-.085 2.011-.085 5.927 0 3.916.015 4.38.085 5.927.066 1.43.304 2.207.506 2.724.234.636.609 1.213 1.096 1.686.473.487 1.05.862 1.686 1.096.518.202 1.294.44 2.724.506 1.547.07 2.01.085 5.927.085s4.38-.015 5.927-.085c1.43-.066 2.206-.304 2.724-.506a4.555 4.555 0 001.686-1.096 4.551 4.551 0 001.096-1.686c.202-.517.44-1.293.506-2.724.07-1.547.085-2.01.085-5.927 0-3.916-.015-4.38-.085-5.927-.066-1.43-.304-2.206-.506-2.724a4.553 4.553 0 00-1.096-1.686 4.55 4.55 0 00-1.686-1.096c-.518-.202-1.294-.44-2.724-.506zm-7.8 16.46a4.892 4.892 0 005.333-7.98 4.892 4.892 0 10-5.333 7.98zm-3.458-9.852a7.539 7.539 0 1110.662 10.662A7.539 7.539 0 0110.669 10.67zm14.542-1.085a1.784 1.784 0 00-.553-2.948 1.783 1.783 0 10.553 2.948z"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
