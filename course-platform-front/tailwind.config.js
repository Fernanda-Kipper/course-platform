/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f1ff",
          100: "#cce3ff",
          200: "#99c8ff",
          300: "#66acff",
          400: "#3391ff",
          500: "#0075ff", // Electric blue primary
          600: "#005ecc",
          700: "#004699",
          800: "#002f66",
          900: "#001733",
        },
        "deep-gray": {
          50: "#f5f5f5",
          100: "#e9e9e9",
          200: "#d9d9d9",
          300: "#c4c4c4",
          400: "#9d9d9d",
          500: "#7b7b7b",
          600: "#555555",
          700: "#434343",
          800: "#262626",
          900: "#171717",
        },
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
