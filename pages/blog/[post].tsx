import {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import Header from '../../components/shared/Header'
import Intro from '../../components/blog/Intro'
import Wrapper from '../../components/blog/Wrapper'
import Error404 from '../Error404'
import Nav from '../../components/shared/Nav'
import Footer from '../../components/shared/Footer'

// Post metadata
import posts from '../../markdown/0-index'

const Project: React.FC<React.ReactNode> = () => {

  const [found, setFound] = useState<boolean>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [filename, setFilename] = useState<string>('000-ph.mdx')
  const [id, setId] = useState<number>(null)


  // Dynamic mdx file grab
  const Post = dynamic(() => import(`../../markdown/${filename}`))

  useEffect(() => {

    let path: string
    if (window) {
      path = window.location.pathname.substr(6)

      for (const item of posts) {

        if (item.slug !== path) setFound(false)

        else if (item.slug === path) {
          // Set post details to component state
          setFound(true)
          setFilename(item.filename)
          setId(item.id)
          break;
        }
      }

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
      <div className="h-screen w-full">
        <h1 className="text-white py-32 px-10 text-center">Loading</h1>
      </div>
      <Footer />
    </>
  }
  else if (loaded && found) {

    // Found and loaded our metadata & mdx content
    return <>
      <Header />
      <Nav />
      <Intro
        tags={posts[id].tags}
        date={posts[id].date}
        title={posts[id].title}
        cover={posts[id].cover}
      />
      <Wrapper><Post /></Wrapper>
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
