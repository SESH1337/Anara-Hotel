module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-beige': 'rgb(207 206 187)',
        ghostwhite: '#F8F8FF',
        whitesmoke: '#F5F5F5',
        grayCustom: '#353535',
        rootRed: '#574f4f',
        yellowSplash: '#ededce',
        customGray: '#7C7477',
        customGrayBg: '#646464',
        beigeBackground: '#F2F1E6',
        translucentBeige: 'rgba(255, 248, 236, 0.59)',
        mediumGray: '#7D7D7D',
        softGray: '#737373',
      },
      fontFamily: {
        boldonse: ['Boldonse', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        ptSerif: ['PTSerif', 'sans-serif'],
        crimson: ['Crimson', 'sans-serif'],
        crimsonBold: ['Crimson-Bold', 'sans-serif'],
        raleway: ['Raleway-VariableFont_wght', 'sans-serif'],
        inconsolate: ['Inconsolata_Condensed-Regular', 'sans-serif'],
        PlayfairDisplayItalic: [
          'PlayfairDisplay-Italic-VariableFont_wght',
          'sans-serif',
        ],
        PlayfairDisplayRegular: [
          'PlayfairDisplay-VariableFont_wght',
          'sans-serif',
        ],

        questrial: ['Questrial-Regular', 'sans-serif'],
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
