/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anta: ['"Anta"', "sans"],
        start: ['"Press Start 2P"', "system-ui"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#793ef9",
          "primary-focus": "#570df8",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",
          "base-100": "#3d4451",
          "base-200": "#2a2e37",
          "base-300": "#16181d",
          "base-content": "#ebecf0",
          info: "#66c6ff",
          success: "#87d039",
          warning: "#e2d562",
          error: "#ff6f6f",
        },
      },
      "light",
    ],
  },
  // use below if you need animation package.
  // run this in terminal: npm install -D tailwindcss-animated
  //uncomment below plugins, comment out above plugins
  //There is also a nice configurator for it here: https://www.tailwindcss-animated.com/configurator.html
  // plugins: [require("tailwindcss-animated")],
};
