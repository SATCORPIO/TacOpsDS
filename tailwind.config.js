// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050507',
        panel: '#0B0F14',
        gold: '#9F8750',
        alert: '#5E0B12',
        success: '#1F5133',
        primary: '#E5E7EB',
        secondary: '#6B7280',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Crimson Pro', 'serif'],
      },
    },
  },
  plugins: [],
}
