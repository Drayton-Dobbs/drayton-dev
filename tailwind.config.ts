import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        main: '#1b1b1b',
        secondary: '#333333',
        third: '#666666',
        highLight: "rgb(48,48,48)",
        brightPink: "#AB0FBF",
        brightYellow: "rgb(244,242,87)"
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
