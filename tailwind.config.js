import { Flowbite } from 'flowbite-react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/Navbar.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [Flowbite],
  
}

