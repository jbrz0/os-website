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
      'sans': ['OS Sans', 'Arial', 'sans-serif'],
      'serif': ['serif'],
      'mono': ['OS Mono', 'monospace'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
    },
    // borderWidth: {
    //   default: '1px',
    //   '0': '0',
    //   '2': '2px',
    //   '4': '4px',
    // },
    extend: {
      colors: {
        'teal': '#00f0e3',
        'purple': '#4028fb',
        'dark-purple': '#3e0bdc',
        'black': '#000000',
        'gray-900': '#0c0a20',
        'gray-800': '#110d26',
        'gray-700': '#131033',
        'gray-600': '#2d2844',
        'gray-500': '#3b4167',
        'gray-400': '#484f7d',
        'gray-300': '#546a90',
        'gray-200': '#b6bfcc',
        'gray-100': '#f2f3f7',
        'white': '#ffffff',
      },
      // spacing: {
      //   '96': '24rem',
      //   '128': '32rem',
      // }
    }
  }
}
