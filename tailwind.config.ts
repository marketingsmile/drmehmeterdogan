import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        extrabold: '700',
        black: '700',
      },
      colors: {
        brandNavy: {
          DEFAULT: '#0e263f',
          950: '#091d34',
          900: '#0e263f',
          800: '#173656',
          700: '#23476c',
        },
        slateBlue: {
          DEFAULT: '#415e79',
          600: '#415e79',
          500: '#547696',
          400: '#698fb4',
          100: '#eef3f8',
        },
        lightBg: '#ededed',
        navy: {
          950: '#091d34',
          900: '#0e263f',
          850: '#153352',
          800: '#1e4268',
          700: '#2c537d',
          600: '#415e79',
        },
        brandDark: '#0e263f',
        amberAccent: {
          100: '#eef3f8',
          300: '#b8cde3',
          400: '#698fb4',
          500: '#415e79',
          600: '#173656',
          700: '#0e263f',
        },
        teal: {
          400: '#698fb4',
          500: '#415e79',
          600: '#23476c',
          700: '#173656',
          900: '#0e263f',
        },
        pearl: '#ededed',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Poppins', 'sans-serif'],
        heading: ['var(--font-heading)', 'Poppins', 'sans-serif'],
        signature: ['var(--font-signature)', 'Alex Brush', 'Caveat', 'cursive'],
      },
      backgroundImage: {
        'navy-gradient': 'radial-gradient(ellipse at 50% 25%, #173656 0%, #0e263f 55%, #071524 100%)',
        'navy-linear': 'linear-gradient(180deg, #091d34 0%, #0e263f 50%, #061322 100%)',
        'hero-gradient': 'linear-gradient(180deg, #ffffff 0%, #ededed 100%)',
        'amber-gradient': 'linear-gradient(135deg, #0e263f 0%, #173656 100%)',
        'brand-gradient': 'linear-gradient(135deg, #0e263f 0%, #415e79 100%)',
        'navy-slate-gradient': 'linear-gradient(135deg, #0e263f 0%, #415e79 100%)',
        'slate-orange-gradient': 'linear-gradient(135deg, #0e263f 0%, #415e79 100%)',
        'teal-gradient': 'linear-gradient(135deg, #0e263f 0%, #415e79 100%)',
        'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(237, 237, 237, 0.9) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
