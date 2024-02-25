
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors:{
        'davivienda-red':'#ED1C27',
        'davivienda-smoke':'#EFEFEF',
        'fake-white':'#F9F9F9',
      },
      boxShadow: {
        'lg': '10px 10px 20px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
  
}

