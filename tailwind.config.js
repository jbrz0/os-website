// module.exports = {
//   purge: [],
//   theme: {
//     extend: {},
//   },
//   variants: {},
//   plugins: [],
// }
module.exports = {
  // purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    // },
    fontFamily: {
      // display: ['serif'],
      // body: ['serif'],
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['serif'],
      'mono': ['OS Mono', 'monospace'],
    },
    // borderWidth: {
    //   default: '1px',
    //   '0': '0',
    //   '2': '2px',
    //   '4': '4px',
    // },
    extend: {
      colors: {
        teal: '#01F0E3',
        black: '#000000',
        gray900: '#090819'
      },
      // spacing: {
      //   '96': '24rem',
      //   '128': '32rem',
      // }
    }
  }
}
