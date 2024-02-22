
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '10px 10px 20px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
  
}

