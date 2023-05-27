/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202A50",
        danger: "#C23D13",
        "alice-blue": "#F0F5F9",
        manatee: "#80869B",
        "ultramarine-blue": "#275DF5",
        "celestial-blue": "#479FE8",
        "ghost-white": "#F1F5FE",
        border: "#E6E7EB",
        focus: "#027EF9",
      },
      backgroundImage: {
        mastercard: "url('/src/assets/images/mastercard-bg.svg')",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
