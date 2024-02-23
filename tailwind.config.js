/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        warning: "hsl(var(--warning))",
        primary: "hsl(var(--primary))",
        "warning-foreground": "hsl(var(--warning-foreground))",
      }
    },

  },
  plugins: [],
}

