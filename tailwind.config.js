module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white:{
          '100': '#F1F1F1',
        },
        violet:{
          '100': '#927BAC',
          '200': '#262B44',
        },
        yellow  :{
          '100': '#FEE761',
        },
        gray:{
          '100': '#C4C4C4',
        },
      },
      outlineWidth: {
        '18': '18px',
      },
    },
  },
  plugins: [],
}
