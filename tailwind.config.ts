import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slateblue: "#1f3a5f",
        sand: "#f4efe8",
        ink: "#102033",
        accent: "#0f766e",
      },
      boxShadow: {
        card: "0 18px 50px rgba(16, 32, 51, 0.08)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(16, 32, 51, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 32, 51, 0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
