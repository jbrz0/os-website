function darkMode(): boolean {

  let isDark: boolean

  if (window) {

    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      // console.log('system: dark mode')
      isDark = true
    }

    else {
      // console.log('system: light mode')
      isDark = false
    }
  }

  return isDark
}

export default darkMode
