/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(1,1,55,1) 0%, rgba(4,60,83,1) 100%)',
      },
    },
  },
  plugins: [],
}

