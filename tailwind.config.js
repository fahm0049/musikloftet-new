module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  plugins: [require("daisyui")],
  textFillColor: (theme) => theme("borderColor"),
  textStrokeColor: (theme) => theme("borderColor"),
  textStrokeWidth: (theme) => theme("borderWidth"),
  paintOrder: {
    fsm: { paintOrder: "fill stroke markers" },
    fms: { paintOrder: "fill markers stroke" },
    sfm: { paintOrder: "stroke fill markers" },
    smf: { paintOrder: "stroke markers fill" },
    mfs: { paintOrder: "markers fill stroke" },
    msf: { paintOrder: "markers stroke fill" },
  },
};
