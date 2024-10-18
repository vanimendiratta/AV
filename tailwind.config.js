/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'earth-brown': '#6D4C41',  // Earthy brown color
        'golden': '#FFD700',       // Golden color
        'green': '#4CAF50',        // Green color
        'orange': '#FF5722',       // Orange color
      },
      letterSpacing: {
        tight: '-0.025em', // Adjust this value as needed
      },
      spacing: {
        'word-custom': '.1em', // Adjust this value as needed
      },
    },
  },
  plugins: [],
};
// tailwind.config.js

