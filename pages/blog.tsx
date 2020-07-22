import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'
import Intro from '../components/blog/Container'
import Footer from '../components/shared/Footer'

const Blog: React.FC<React.ReactNode> = () => {

  return <>
    <Header />
    <Nav />
    <Intro />
    <Footer />
  </>
}

export default Blog
