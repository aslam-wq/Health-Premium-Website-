/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0B",
        panel: "#141414",
        "panel-lighter": "#1C1C1C",
        primary: "#E6FF5C",
        "primary-hover": "#D4EB4C",
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
