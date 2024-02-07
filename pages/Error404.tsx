import Header from '../components/shared/Header'
import Link from 'next/link'
import Nav from '../components/shared/Nav'
import Footer from '../components/shared/Footer'

const Error404: React.FC<React.ReactNode> = () => {

  return <>
    <Header />
    <Nav />
    <div className="w-full h-screen">
      <div className="absolute top-0 mx-auto left-0 right-0
        shadow-xl w-64 mt-40 z-10 px-5 rounded-lg py-5"
        style={{backgroundColor: `rgba(0,0,0,0.95)`}}>
        {/* <h1 className="text-white mb-4 text-2xl text-center">404</h1> */}
        <div className="mb-10 text-lg font-light text-center text-gray-200">
          This page does not exist
        </div>
        <Link href="/">
          <button className="gr-tw-3 text-white uppercase rounded
            px-10 py-3 text-center block mx-auto text-lg font-normal">
              Go Home
            </button>
        </Link>
      </div>
      <img src="/404bot.svg" className="w-full absolute bottom-0" />
    </div>
    <Footer />
  </>
}

export default Error404
