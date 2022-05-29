const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9DCEFF",
        secondary: "#92A3FD",
      },
      fontFamily: {
        sans: "Poppins_400Regular",
        "sans-thin": "Poppins_100Thin",
        "sans-extralight": "Poppins_200ExtraLight",
        "sans-light": "Poppins_300Light",
        "sans-medium": "Poppins_500Medium",
        "sans-semibold": "Poppins_600SemiBold",
        "sans-bold": "Poppins_700Bold",
        "sans-extrabold": "Poppins_800ExtraBold",
        "sans-black": "Poppins_900Black",
      },
    },
  },
  plugins: [],
};
