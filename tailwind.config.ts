import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth', 'auto'],
      colors: {
        "txt-blue": "#0F4E6E",
        "primary-blue": "#1BA1E4",
        "primary-green": "#1BE4C2",
        "secondary-blue": "#DBF0FB",
        "secondary-green": "#DBFBF5",
        "accent-red": "#FF8B8B"
      },
    },
  },
  plugins: [],
};

export default config;
