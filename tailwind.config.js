/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#00b5e8',
        bgDark: '#000c1c',
        bgDarkSecondary: '#001938',
        bgDarkTransparent: '#000c1cb3',
        bgLight: '#f1f5f9',
        bgLightSecondary: '#ffffff',
        bgLightTransparent: '#ffffffb3',
      },
      maxWidth: {
        custom: '1000px',
      },
      keyframes: {
        radiusMorph: {
          '0%': { borderRadius: '56% 44% 42% 58%/51% 55% 45% 49%' },
          '25%': { borderRadius: '41% 59% 36% 64%/61% 55% 45% 39%' },
          '50%': { borderRadius: '59% 41% 53% 47%/46% 48% 52% 54%' },
          '75%': { borderRadius: '49% 51% 38% 62%/58% 51% 49% 42%' },
          '100%': { borderRadius: '56% 44% 42% 58%/51% 55% 45% 49%' },
        },
        pulseRight: {
          '0%': { transform: 'translate(0)' },
          '50%': { transform: 'translate(4px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        radiusMorph: 'radiusMorph 8s infinite',
        pulseRight: 'pulseRight 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
