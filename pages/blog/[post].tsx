import {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import Header from '../../components/shared/Header'
import Intro from '../../components/blog/Intro'
import Wrapper from '../../components/blog/Wrapper'
import Prev from '../../components/blog/Prev'
import Error404 from '../Error404'
import Loading from '../Loading'
import Nav from '../../components/shared/Nav'
import Footer from '../../components/shared/Footer'

// Post metadata
import posts from '../../markdown/0-index'

const Post: React.FC<React.ReactNode> = () => {

  const [found, setFound] = useState<boolean>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [filename, setFilename] = useState<string>('000-ph')
  const [id, setId] = useState<number>(null)


  // Dynamic mdx file grab
  const Post = dynamic(() => import(`../../markdown/${filename}.mdx`))

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

    return <Loading />
  }
  else if (loaded && found) {

    // Get the previous post ID
    let prevId: number = id - 1
    const latestId: number = posts.length - 1
    let subtext: string = ''

    if (prevId < 0) {
      prevId = latestId
      subtext = 'Recent Post'
    }

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
      <Prev href={`/blog/${posts[prevId].slug}`} title={`${posts[prevId].title}`} subtext={subtext} />
      <Footer />
    </>
  }

  else if (loaded && !found) {

    // Proper 404 response
    return <Error404 />
  }

  // Catch-all
  else return <Loading />
}

export default Post
