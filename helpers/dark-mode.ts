function darkMode(): boolean {

  let isDark: boolean

  if (window) {

    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      // one of us
      isDark = true
      console.log('dark')
    }

    else {
      // light mode
      isDark = false
      console.log('light')
    }
  }

  return isDark
}

export default darkMode
