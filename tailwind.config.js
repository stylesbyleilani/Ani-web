/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
],
  theme: {
    extend: {
colors:{
"my-100":"#13f287",
"my-200":"#121212",
"my-300":"#ffffff",
"my-400":"#083270",
"my-500":"#5ca0de",
"my-600":"#13f287",






},
screens:{
  sm:"320px",
  md:"768px",
  lg:"1024px"
}
    },
  },
  plugins: [],
}

