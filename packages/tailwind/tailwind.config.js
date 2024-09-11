/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    // Add the external packages that are using Tailwind CSS
    "./node_modules/@repo/ui/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
