/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: "#030305", // Deeper, richer black
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#00F0FF",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#7000FF",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#FF0055", // Cyberpunk Red/Pink
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          foreground: "#ffffff",
        },
        border: "rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #00F0FF 0deg, #7000FF 180deg, #FF0055 360deg)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow-safe': 'spin 20s linear infinite',
        'blob': 'blob 7s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      }
    },
  },
  plugins: [],
}
