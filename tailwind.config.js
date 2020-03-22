module.exports = {
  theme: {
    extend: {
      colors: {
        "mixxer-shell-white": "#F0EBE0",
        "mixxer-dark-gray": "#343434",
        "mixxer-caviar": "#313031",
        "mixxer-cherry-red": "#EC2526",
        "mixxer-positive-red": "#AD2C34"
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar"
    })
  ]
};
