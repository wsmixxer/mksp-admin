module.exports = {
  theme: {
    extend: {
      colors: {
        "mixxer-shell-white": "#F0EBE0",
        "mixxer-dark-gray": "#343434",
        "mixxer-caviar": "#313031",
        "mixxer-cherry-red": "#EC2526",
        "mixxer-positive-red": "#AD2C34",
        gray: {
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121"
        }
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
