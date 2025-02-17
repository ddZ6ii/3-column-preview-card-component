/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#9d5a11',
          cyanDark: '#006970',
          cyanDarker: '#004241',
        },
        neutral: {
          50: '#f2f2f2',
          100: '#ffffffe6',
        },
      },
      fontFamily: {
        body: ['Lexend Deca', 'sans-serif'],
        bodyVF: ['Lexend Deca VF', 'sans-serif'],
        heading: ['Big Shoulders Display', 'sans-serif'],
        headingVF: ['Big Shoulders Display VF', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        bold: '700',
      },
      fontSize: {
        body: '0.9375rem',
        heading: '2.5rem',
      },
    },
    plugins: [],
  },
};
