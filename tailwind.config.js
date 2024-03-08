/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anta: ['"Anta"', "sans"],
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         "color-scheme": "light",
  //         primary: "#1cb6dc",
  //         secondary: "oklch(69.71% 0.329 342.55)",
  //         "secondary-content": "oklch(98.71% 0.0106 342.55)",
  //         accent: "oklch(76.76% 0.184 183.61)",
  //         neutral: "#2B3440",
  //         "neutral-content": "#D7DDE4",
  //         "base-100": "oklch(100% 0 0)",
  //         "base-200": "#F2F2F2",
  //         "base-300": "#E5E6E6",
  //         "base-content": "#1f2937",
  //       },
  //     },
  //   ],
  // },
  // use below if you need animation package.
  // run this in terminal: npm install -D tailwindcss-animated
  //uncomment below plugins, comment out above plugins
  //There is also a nice configurator for it here: https://www.tailwindcss-animated.com/configurator.html
  // plugins: [require("tailwindcss-animated")],
};
