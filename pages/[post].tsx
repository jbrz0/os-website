import {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import Header from '../components/shared/Header'
import Error404 from './Error404'
import Nav from '../components/shared/Nav'
import Footer from '../components/shared/Footer'

// Post metadata
import posts from '../markdown/0-index'

const Project: React.FC<React.ReactNode> = () => {

  const [found, setFound] = useState<boolean>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [filename, setFilename] = useState<string>('000-ph.mdx')

  // Dynamic mdx file grab
  const Post = dynamic(() => import(`../markdown/${filename}`))

  useEffect(() => {

    let path: string
    if (window) {
      path = window.location.pathname.substr(1)

      posts.map(item => {
        if (item.slug !== path) setFound(false)
        else if (item.slug === path) {
          setFound(true)
          setFilename(item.filename)
        }
      })
    }
  }, [])

  useEffect(() => {

    if (found !== null) setLoaded(true)
  }, [found])


  //* Post render logic

  if (!loaded && found === null) {

    // Searching via url & post directory
    return <>
      <Header />
      <Nav />
      <div className="h-full w-full bg-red"><h1 className="m-20 text-white">Loading</h1></div>
      <Footer />
    </>
  }
  else if (loaded && found) {

    // Found and loaded our metadata & mdx content
    return <>
      <Header />
      <Nav />
      <div className="h-full w-full bg-green">
        <h1 className="m-20 text-white">Content wooo</h1>
        <Post />
      </div>
      <Footer />
    </>
  }

  else if (loaded && !found) {

    // Proper 404 response
    return <Error404 />
  }

  // Catch-all 404 response, possibly refactor
  else return <Error404 />
}

export default Project
