import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'
import Intro from '../components/home/Intro'
import About from '../components/home/About'
import Line from '../components/shared/Line'
import Divider from '../components/shared/Divider'
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
      {/* <Line /> */}
      <div className="relative z-20">
        <Divider type="1" />
        <Features />
        <RecentProj />
        <Tech />
        <Divider type="2" />
        <Labs />
        {/* <Line />
        <Store /> */}
      </div>
      <Footer />
    </>
  )
}

export default Home
