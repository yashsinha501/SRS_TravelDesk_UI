/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oceanBlue: '#2A7B9B',
        mintGreen: '#57C785',
        lemonYellow: '#EDDD53',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #2A7B9B 0%, #57C785 50%, #EDDD53 100%)',
      },
    },
  },
  plugins: [],
}

