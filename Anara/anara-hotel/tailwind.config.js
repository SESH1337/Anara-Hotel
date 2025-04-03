module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        boldonse: ['Boldonse', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        ptSerif: ['PTSerif', 'sans-serif'],
        crimson: ['Crimson', 'sans-serif'],
        crimsonBold: ['Crimson-Bold', 'sans-serif'],
      },
      animation: {
        'fade-up-deep': 'fadeUpDeep 1.5s ease-in-out forwards',
      },
      keyframes: {
        fadeUpDeep: {
          '0%': { opacity: 0, transform: 'translateY(100px) scale(0.9)' },
          '50%': { opacity: 0.5, transform: 'translateY(50px) scale(1)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
