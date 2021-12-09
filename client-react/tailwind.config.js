module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        clouds:
          "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,1.0)),url('/images/clouds2.jpg')",
        jet: "linear-gradient(to bottom, rgba(255,255,255,0.0), rgba(255,255,255,0.4)),url('/images/jet.jpg')",
      },
      fontFamily: {
        oxygen: ["Oxygen"],
        lato: ["Lato"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};