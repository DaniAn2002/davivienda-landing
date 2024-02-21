
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Register.jsx",
    "./src/components/MainHero.jsx",
    "./src/components/Premios.jsx",
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

