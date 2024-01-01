/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        VisbyRound: ['VisbyRound', 'sans-serif'],
        VisbyRoundBold: ['VisbyRound-Bold', 'sans-serif'],
        VisbyRoundMedium: ['VisbyRound-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
