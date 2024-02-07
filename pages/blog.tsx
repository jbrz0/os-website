import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'
import Container from '../components/blog/Container'
import Footer from '../components/shared/Footer'
import { useEffect } from 'react'

const Blog: React.FC<React.ReactNode> = () => {

  // useEffect(() => {
  //   setTimeout(function(){debugger;}, 2000)
  // })

  return <>
    <Header />
    <Nav />
    <Container />
    <Footer />
  </>
}

export default Blog
