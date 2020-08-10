import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'
import Intro from '../components/home/Intro'
import About from '../components/home/About'
import Line from '../components/shared/Line'
import Features from '../components/home/Features'
import RecentProj from '../components/home/Projects'
import Tech from '../components/home/Tech'
import Labs from '../components/home/Labs'
import Store from '../components/home/Store'
import Footer from '../components/shared/Footer'

const Home: React.FC<React.ReactNode> = () => {

  return (
    <>
      <Nav />
      <Header />
      <Intro />
      <About />
      <Line />
      <Features />
      <RecentProj />
      <Tech />
      <Line />
      <Labs />
      {/* <Line /> */}
      {/* <Store /> */}
      <Footer />
    </>
  )
}

export default Home
