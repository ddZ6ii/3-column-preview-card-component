export default {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-uncss': {
      html: ['./src/index.html'],
    },
  },
};
