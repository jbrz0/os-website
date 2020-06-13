import { useState, useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import Head from 'next/head'
import darkMode from '../helpers/dark-mode'
import {titleCase} from '../helpers/format-text'

const Header: React.FC = () => {

  // Detect dark mode for favicon
  const [dark, setDark] = useState<boolean>(true)
  useEffect(() => {
    setDark(darkMode())
  }, [])

  // Get page name for tab
  const router: NextRouter = useRouter()
  const path: string = titleCase(router.pathname)

  return (<>
    <Head>
      <title>Odd Scenes: {path === '/' ? 'Home' : path}</title>
      {dark === true && <link rel="icon" href="/favicon.ico" />}
      {dark === false && <link rel="icon" href="/favicon-light.ico" />}
    </Head>
  </>)
}

export default Header
