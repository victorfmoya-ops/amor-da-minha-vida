import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F2",
        ivory: "#FFFDF9",
        beige: "#EFE4D6",
        nude: "#E6CDBE",
        blush: { 50: "#FDF3F1", 100: "#F8E3DF", 200: "#F1CFC8", 300: "#E5B3AA" },
        rosewood: "#9A6B64",
        cocoa: "#5E4741",
        gold: { 300: "#E3CD9C", 400: "#CDAE6E", 500: "#B8975A", 600: "#957641" },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        script: ['"Pinyon Script"', "cursive"],
        hand: ['"Caveat"', "cursive"],
        sans: ['"Jost"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(94, 71, 65, 0.28)",
        polaroid: "0 30px 60px -25px rgba(94, 71, 65, 0.45), 0 4px 10px rgba(94,71,65,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
