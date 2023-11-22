/** @type {import('tailwindcss').Config} */

const CONFIG = require("./theme/tailwind-partials/core.config");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: CONFIG.colors,
    screens: CONFIG.screens,
  },
  plugins: [],
};
