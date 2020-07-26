import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'
import Intro from '../components/shop/Intro'
import Items from '../components/shop/Items'
import Footer from '../components/shared/Footer'

const Shop: React.FC<React.ReactNode> = () => {

  return <>
    <Header />
    <Nav />
    <Intro />
    <Items />
    <Footer />
  </>
}

export default Shop
