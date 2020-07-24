import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'
import Footer from '../components/shared/Footer'

const Loading: React.FC<React.ReactNode> = () => {

  // Searching via url & post directory
  return <>
    <Header />
    <Nav />
    <div className="h-screen w-full">
      <h1 className="text-white py-32 px-10 text-center">Loading</h1>
    </div>
    <Footer />
  </>
}

export default Loading
