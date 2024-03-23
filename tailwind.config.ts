import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#1b1b1b',
        highLight: "rgb(48,48,48)",
        brightPink: "#AB0FBF",
        brightYellow: "rgb(244,242,87)"
      }
    },
  },
  plugins: [],
};
export default config;
