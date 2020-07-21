import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'
import Intro from '../components/projects/Intro'
import Project1 from '../components/projects/Project1'
import Labs from '../components/projects/Labs'
import Project2 from '../components/projects/Project2'
import Footer from '../components/shared/Footer'

const Projects: React.FC<React.ReactNode> = () => {

  return <>
    <Header />
    <Nav />
    <Intro />
    <Project1 />
    <Labs />
    <Project2 />
    <Footer />
  </>
}

export default Projects
