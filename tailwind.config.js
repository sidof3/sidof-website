/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        // Marque Sidof : #f9565f = brand-500
        brand: {
          50: '#fff1f2',
          100: '#ffe1e3',
          200: '#ffc8cc',
          300: '#ffa0a6',
          400: '#fd7a82',
          500: '#f9565f',
          600: '#e63843',
          700: '#c22833',
          800: '#a02530',
          900: '#84262f',
        },
        // Accents par division
        build: '#2563eb', // construction
        design: '#c2674a', // design d'intérieur (terracotta)
        land: '#2f8f5b', // terrains
        ink: '#1f2430',
        muted: '#5b6270',
        // Accent de la section courante (voir data-accent dans styles.css)
        accent: 'var(--accent, #f9565f)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};