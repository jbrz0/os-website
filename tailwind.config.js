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
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
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
        'gray-1000': '#090819',
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
        'pink': '#ff2e97',
        'hot-pink': '#fe0081',
        'red': '#f3164c',
        'fuscia': '#ff29fc',
        'lavender': '#a875ff',
        'violet': '#8a45a3',
        'dark-violet': '#763b8c',
        'yellow': '#ffd400',
        'gold': '#f7b83d',
        'orange': '#ff9b50',
        'lime': '#06f061',
        'green': '#a6e22e',
        'olive': '#7da602',
        'blue': '#376dff',
        'light-blue': '#34cef9',
        'sky-blue': '#5ecdfd',
        'slate-100': '#b6ced8',
        'slate-200': '#6494a9',
        'slate-300': '#456b7c',
        'slate-400': '#425056',
        'cream': '#f8f8f1',
        'brown': '#664e4d',
        'sand': '#e5db74',
      },
      // spacing: {
      //   '96': '24rem',
      //   '128': '32rem',
      // }
      opacity: {
        '85': '0.85',
      }
    }
  }
}
