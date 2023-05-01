/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height : {
        "20vh" : "20vh",
        "90vh" :"90vh",
        "80vh" : "80vh",
        "50vh" : "50vh",
        "10vh" : "10vh",
        "10%" : "10%",

      },
      gap : {
        "10%" : "10%"
      }
    },
  },
  plugins: [],
}
