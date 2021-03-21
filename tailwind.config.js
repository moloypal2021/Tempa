module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "260px": "260px",
        "310px": "310px",
        "340px": "340px",
        "400px": "400px",
      },
      height: {
        "196px": "196px",
        "230px": "230px",
        "360px": "360px",
        "400px": "400px",
        "460px": "460px",
        "800px": "710px",
      },
      maxWidth: {
        "188px": "188px",
        "235px": "235px",
        "264px": "264px",
        "310px": "310px",
        "320px": "320px",
        "598px": "598px",
      },
      paddings: {
        18: "4.5rem",
        34: "8.5rem",
      },
      colors: {
        dark: {
          title: "#212121",
          hero: "#1B1C1E",
          button: "#1B1C1E",
          "light-border": "#DEDEDE",
          border: "#AAAAAA",
          surface: "#F4F4F4",
          border: "#AAAAAA",
          text: "#212121",
          "text-sub": "#767676",
          accent: "#040C0E",
          light: "#F7F7F7",
        },
      },
      screens: {
        "2xl": "1440px",
      },
      fontSize: {
        "40px": "40px",
      },
      lineHeight: {
        11: "3rem",
        "60px": "60px",
      },
      zIndex: {
        "-1": "-1",
      },
      boxShadow: {
        d: "0px 0px 12px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover", "group-focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
