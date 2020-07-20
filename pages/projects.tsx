import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'

export default function Projects() {
  return <>
    <Header />
    <Nav />

    <div className="h-screen bg-black">
      <div className="container mx-auto px-24">
        <div className="h-screen flex justify-center items-center">
          <h3 className="text-white text-center m-3 text-right mt-4">Web Design &amp;<br />Development</h3>
          <h1 className="text-white text-6xl">Projects</h1>
        </div>

        <img src="icons/arrow-down.svg" alt="See More"
          className="absolute mx-auto left-0 right-0" style={{bottom: `2rem`}} />
      </div>
    </div>

  </>
}
