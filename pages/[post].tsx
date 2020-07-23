import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Header from '../components/shared/Header'
import Error404 from './Error404'
import Nav from '../components/shared/Nav'
import Test, {meta} from '../markdown/000-test.mdx'
import Footer from '../components/shared/Footer'
import posts from '../markdown/0-index'

const Project: React.FC<React.ReactNode> = () => {

  const router = useRouter()

  const {post} = router.query

  const [found, setFound] = useState(null)

  useEffect(() => {

    posts.map(item => {
      if (item.slug === post) setFound(true)
      else if (item.slug !== post) setFound(false)
    })
  }, [])

  console.log(found)
  //   //TODO: Get list of posts from folder, and if none exist
  // //TODO: then return error page, otherwise, return post with data
  // //TODO: (Replace the 1>2 bit with the logic)
  if (!router.isFallback && found !== null && found !== false) return <Error404 />

  // else
  else return <>
    <Header />
    <Nav />
    <div className="container bg-gray-800 block mx-auto mb-20">
      <h1 className="my-32 text-white text-3xl" onClick={() => router.push('/404')}>Hi {post}</h1>
      <p>{meta.date}</p>
      <Test />
    </div>
    <Footer />
  </>
}

export default Project
