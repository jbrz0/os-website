const Intro: React.FC<React.ReactNode> = () => {

  return <div className="h-screen bg-gray-1000">
    <div className="container mx-auto px-12 md:px-24">
      <div className="h-screen flex justify-center items-center">
        <div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl text-center">Shop Art &amp; Merch</h1>
          <h3 className="text-white text-center mt-4 mx-auto text-center max-w-sm">
            Selected digital artwork available as prints, apparel and other items
          </h3>
        </div>
      </div>

      <img src="icons/arrow-down.svg" alt="See More"
        className="absolute mx-auto left-0 right-0 bottom-0 mb-3 sm:mb-5" />
    </div>
  </div>
}

export default Intro
