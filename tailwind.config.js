/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#FAE3B6',
        'secondary': '#FDBB57',
      },
    },
    fontFamily: {
      'pop': ['Poppins'],
      'frank': ['Frank Ruhl Libre'],
      'pod': ['Podkova'],
      
    },
    fontSize: {
      small: '22px',
      large: '64px',
      medium: '28px',
      
    }
  },
  plugins: [],
}

