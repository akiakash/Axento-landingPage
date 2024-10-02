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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        zapier: ['Archivo Black', 'sans-serif'],
        gumroad: ['Raleway', 'sans-serif'],
        featherdev: ['Poppins', 'sans-serif'],
        figma: ['Inter', 'sans-serif'],
        coinbase: ['DM Sans', 'sans-serif'],
        globalbank: ['Montserrat', 'sans-serif'],
        amplitude: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
