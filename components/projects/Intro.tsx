const Intro: React.FC<React.ReactNode> = () => {

  return <div className="h-screen bg-black">
    <div className="container mx-auto px-24">
      <div className="h-screen flex justify-center items-center">
        <h3 className="hidden md:block text-white m-3 text-right mt-4">Web Design &amp;<br />Development</h3>
        <h1 className="hidden md:block text-white text-6xl">Projects</h1>

        <div className="block md:hidden">
          <h1 className="text-white text-center text-4xl sm:text-5xl">Projects</h1>
          <h3 className="text-white text-center text-sm sm:text-base mt-4">Web Design &amp; Development</h3>
        </div>
      </div>

      <img src="icons/arrow-down.svg" alt="See More"
        className="absolute mx-auto left-0 right-0" style={{bottom: `2rem`}} />
    </div>
  </div>
}

export default Intro
