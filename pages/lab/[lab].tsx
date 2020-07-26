import {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import Error404 from '../Error404'
import Overlay from '../../components/lab/Overlay'
import Loading from '../Loading'

// Post metadata
import posts from '../../markdown/0-index'

const Lab: React.FC<React.ReactNode> = () => {

  let labs: any

  const [found, setFound] = useState<boolean>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [filename, setFilename] = useState<string>('000-ph')
  const [id, setId] = useState<number>(null)

  // Dynamic lab component file grab
  const LabIn = dynamic(() => import(`../../laboratory/${filename}.tsx`))

  useEffect(() => {
    // Get labs from all posts metadata
    labs = posts.filter(post => post.isLab === true)

    let path: string

    if (window) {
      path = window.location.pathname.substr(5)

      for (const item of labs) {

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

    // Found and loaded our metadata & mdx content
    return <>
      {/* <Overlay href="/"><Lab /></Overlay> */}
      <Overlay href={`/blog/${posts[id].slug}`}><LabIn /></Overlay>
    </>
  }

  else if (loaded && !found) {

    // Proper 404 response
    return <Error404 />
  }

  // Catch-all
  else return <Loading />
}

export default Lab
