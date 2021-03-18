module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        },
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
