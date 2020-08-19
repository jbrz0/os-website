import { useState, useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import Head from 'next/head'
import ReactGA from 'react-ga'
import darkMode from '../../helpers/dark-mode'
import {titleCase} from '../../helpers/format-text'

const Header: React.FC<React.ReactNode> = () => {

  // Detect dark mode for favicon
  const [dark, setDark] = useState<boolean>(true)
  useEffect(() => {
    setDark(darkMode())

    // Load Google Analytics
    ReactGA.initialize(process.env.GA)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  // Get page name for tab
  const router: NextRouter = useRouter()
  const path: string = titleCase(router.pathname.substr(1))

  return (<>
    <Head>
      <title>Odd Scenes: {path === '' ? 'Home' : path}</title>
      {dark === true && <link rel="icon" href="/favicon.ico" />}
      {dark === false && <link rel="icon" href="/favicon-light.ico" />}
    </Head>
  </>)
}

export default Header
