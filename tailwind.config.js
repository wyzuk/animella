/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        animella: {
          bg: '#07070a',
          surface: '#0f1016',
          card: '#13141f',
          cardHover: '#181a28',
          glass: 'rgba(18, 19, 29, 0.72)',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.22)',
          accent: '#e11d48', // Crimson Sakura
          accentLight: '#fb7185',
          neonCyan: '#06b6d4',
          neonViolet: '#a855f7',
          neonAmber: '#f59e0b',
          muted: '#8b8d9e',
          subtext: '#656779',
          heading: '#f3f4f9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        japanese: ['Noto Sans JP', 'Zen Kaku Gothic New', 'sans-serif'],
        logo: ['Syne', 'sans-serif']
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow-accent': '0 0 35px -8px rgba(225, 29, 72, 0.45)',
        'glow-violet': '0 0 35px -8px rgba(168, 85, 247, 0.45)',
        'glow-cyan': '0 0 35px -8px rgba(6, 182, 212, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(255, 255, 255, 0.06)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '40px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
