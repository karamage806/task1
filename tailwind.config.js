/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Outfit', 'sans-serif'],
        display: ['Fraunces', 'serif'],
        mono:    ['Space Mono', 'monospace'],
      },
      colors: {
        bg:        'var(--color-bg)',
        surface:   'var(--color-surface)',
        surface2:  'var(--color-surface-2)',
        border:    'var(--color-border)',
        border2:   'var(--color-border-2)',
        accent:    'var(--color-accent)',
        'accent-dim': 'var(--color-accent-dim)',
        teal:      'var(--color-teal)',
        'teal-dim':'var(--color-teal-dim)',
        danger:    'var(--color-danger)',
        text:      'var(--color-text)',
        muted:     'var(--color-text-muted)',
        faint:     'var(--color-text-faint)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm:     'var(--shadow-sm)',
        md:     'var(--shadow-md)',
        lg:     'var(--shadow-lg)',
        accent: 'var(--shadow-accent)',
        teal:   'var(--shadow-teal)',
      },
      transitionDuration: {
        DEFAULT: '180ms',
      },
      animation: {
        'fade-up':   'fadeUp 0.5s cubic-bezier(0.4,0,0.2,1) both',
        'spin-slow': 'spin-slow 3s linear infinite',
        'pulse-glow':'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
