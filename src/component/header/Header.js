import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.navToggle = this.navToggle.bind(this);
  }
  navToggle() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <nav className="bg-white">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 lg:py-6 sm:py-4">
            <div className="relative flex items-center w-full h-16">
              <div className="mr-auto z-10">
                {/* <!-- Mobile Nav toogle Button Start--> */}
                <button
                  className="block lg:hidden  p-1 text-black hover:text-dark-title focus:outline-none"
                  onClick={this.navToggle}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12h18M3 6h13M3 18h9"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* <!-- Mobile Nav toogle Button End--> */}

                {/* <!-- Desktop Menus Start --> */}
                <div className="hidden lg:block">
                  <ul className="flex xl:space-x-12 lg:space-x-8">
                    <li className="text-black hover:text-dark-title py-2 xl:text-2xl lg:text-xl">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="text-black hover:text-dark-title py-2 xl:text-2xl lg:text-xl ">
                      <Link to="/category"> Shop</Link>
                    </li>
                    <li className="text-black hover:text-dark-title py-2 xl:text-2xl lg:text-xl ">
                      <Link to="/">About</Link>
                    </li>
                    <li className="text-black hover:text-dark-title py-2 xl:text-2xl lg:text-xl ">
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- Desktop Menus Start --> */}
              </div>
              {/* <!-- Logos Start --> */}
              <div className="lg:absolute lg:right-0 lg:left-0 mx-auto text-center z-0">
                <h1 className="lg:text-[40px] text-3xl font-bold text-black">
                  Tempa
                </h1>
              </div>
              {/* <!-- Logos End --> */}

              {/* <!-- Shoping Cart Start --> */}
              <div className="flex items-center ml-auto">
                <button className="p-1 text-black hover:text-dark-title focus:outline-none ">
                  <svg
                    className="md:w-8 md:h-8 w-6 h-6"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.401 11.893a1.333 1.333 0 011.33-1.226h18.538a1.334 1.334 0 011.33 1.226l1.169 14.56a2.667 2.667 0 01-2.657 2.88H6.889a2.667 2.667 0 01-2.657-2.88L5.4 11.893h.001z"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.333 14.667V8a5.333 5.333 0 10-10.666 0v6.667"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {/* <!-- Shoping Cart End --> */}
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu stat Start  */}
          <div
            className={`lg:hidden fixed bg-dark-title bg-opacity-70 inset-0 z-50 ${
              this.state.isToggleOn ? "hidden" : "block"
            }`}
          >
            <div className="fixed left-0 sm:max-w-xs max-w-264px w-full h-full bg-white md:px-10 sm:px-8 px-4 sm:pt-8 sm:py-6 py-4">
              <div className="flex mb-10">
                <button
                  className="p-1 text-black hover:text-dark-title focus:outline-none"
                  onClick={this.navToggle}
                >
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.667 5.333L5.333 26.668m21.334 0L5.333 5.333l21.334 21.334z"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <h1 className="lg:text-40px text-3xl font-bold text-black mx-auto pr-8">
                  Tempa
                </h1>
              </div>
              <div className="px-5">
                <a
                  href="{#}"
                  className="text-black font-medium hover:text-dark-title py-2 rounded-md sm:text-xl text-lg block"
                >
                  Home
                </a>
                <a
                  href="{#}"
                  className="text-black font-medium hover:text-dark-title py-2 rounded-md sm:text-xl text-lg block"
                >
                  Shop
                </a>
                <a
                  href="{#}"
                  className="text-black font-medium hover:text-dark-title py-2 rounded-md sm:text-xl text-lg block"
                >
                  About
                </a>
                <a
                  href="{#}"
                  className="text-black font-medium hover:text-dark-title py-2 rounded-md sm:text-xl text-lg block"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state End */}
        </nav>
      </div>
    );
  }
}
