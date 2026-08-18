import type { Config } from "tailwindcss";
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_heading: "#8a0f19",
        light_heading: "#ffffff",
        light_text: "#ffffff",
        dark_heading: "#000000",
        description: "#4f4f4f",
        primary_color: "#880f18",
        primary_color_shade: "#96101f",
        secondary_color: "#a91128",
        secondary_color_shade: "#C31324",
        bg_dark: "#171717",
        bg_light: "#ffffff",
        bg_color: "#e2e1e196",
        bg_red: "#a91128",
      },
    },
  },
  plugins: [],
} satisfies Config;
// function addVariablesForColors({ addBase, theme }: any) {
//   const allColors = flattenColorPalette(theme("colors"));
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
