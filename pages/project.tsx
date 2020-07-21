import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'
import Intro from '../components/project/Intro'
import Footer from '../components/shared/Footer'
import Line from '../components/shared/Line'
import Concept from '../components/project/Concept'
import Drafts from '../components/project/Drafts'
import Branding from '../components/project/Branding'
import Mockups from '../components/project/Mockups'
import Devices from '../components/project/Devices'

const Project: React.FC<React.ReactNode> = () => {

  return <>
    <Header />
    <Nav />
    <Intro />
    <Line />
    <Concept />
    <Drafts />
    <Line />
    <Branding />
    <Mockups />
    <Line />
    <Devices />
    <Footer />
  </>
}

export default Project
