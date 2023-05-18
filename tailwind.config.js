/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'Poppins':['Poppins','sans-serif']
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#23aa92",
        
"secondary": "#107987",
        
"accent": "#81aae8",
        
"neutral": "#1D2335",
        
"base-100": "#E3E2EE",
        
"info": "#31A6D8",
        
"success": "#2BE38A",
        
"warning": "#E59306",
        
"error": "#EB2614",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

