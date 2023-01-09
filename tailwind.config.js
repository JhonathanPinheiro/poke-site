/* eslint-disable global-require */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require("./src/theme.json");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme,

  plugins: [],
};
