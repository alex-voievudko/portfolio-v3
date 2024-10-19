import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131316",
        card: "#26272B",
        primary: "#C9D179",
        "primary-hover": "#98A238",
        secondary: "#FFC1CC",
        typography: "#F9F9F9",
        white: "#ffffff",
      },
      fontFamily: {
        roboto: ["var(--font-space-mono)"],
      },
      backgroundImage: {
        "gradient-linear": "linear-gradient(rgb(45, 50, 58), rgb(34, 37, 43) 99%)",
        "gradient-primary": "linear-gradient(rgb(250, 84, 0) -7%, rgb(250, 62, 0) 105%)",
      },
      boxShadow: {
        card: "rgba(99, 104, 135, 0.5) 0px 1px 0px 0px inset",
      },
    },
  },
  plugins: [],
};
export default config;
