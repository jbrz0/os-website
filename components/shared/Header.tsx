import { useState, useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import Head from 'next/head'
import ReactGA from 'react-ga'
import darkMode from '../../helpers/dark-mode'
import {titleCase} from '../../helpers/format-text'

const Header: React.FC<React.ReactNode> = () => {

  // Detect dark mode for favicon
  const [dark, setDark] = useState<boolean>(true)

  const [path, setPath] = useState<string>('')

  useEffect(() => {
    setDark(darkMode())

    // Load Google Analytics
    ReactGA.initialize(process.env.GA)
    ReactGA.pageview(window.location.pathname + window.location.search)

    const pathVar = window.location.pathname.slice(0, 5)

    if (pathVar === '/') setPath(" Home")
    else if (pathVar === '/labs') setPath(" Labs")
    else if (pathVar === '/proj') setPath(" Projects")
    else if (pathVar === '/lab/') setPath(" Lab")
    else if (pathVar === '/blog') setPath(" Blog")
    else setPath(pageTitle)

  }, [])

  // Get page name for tab
  const router: NextRouter = useRouter()
  const pageTitle: string = titleCase(router.pathname.substr(1))

  return (<>
    <Head>

      {/* <title>Odd Scenes:
        {path}
      </title> */}
      <title>{`Odd Scenes ${path}`}</title>

      <meta name="description" content="Building the modern web with an eye for design and interaction" />

      {/* OG Tags */}
      <meta property="og:title" content="Odd Scenes" />
      <meta property="og:description" content="Building the modern web with an eye for design and interaction" />
      <meta property="og:image" content="https://oddscenes.s3.amazonaws.com/screenshot-os-website.png" />
      <meta property="og:url" content="https://oddscenes.com" />
      <meta property="og:site_name" content="Odd Scenes" />

      <meta name="twitter:title" content="Odd Scenes" />
      <meta name="twitter:description" content="Building the modern web with an eye for design and interaction" />
      <meta name="twitter:image" content=" https://oddscenes.s3.amazonaws.com/screenshot-os-website.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content="Odd Scenes" />

      {dark === true && <link rel="icon" href="/favicon.ico" />}
      {dark === false && <link rel="icon" href="/favicon-light.ico" />}
    </Head>
  </>)
}

export default Header
