const Intro: React.FC<React.ReactNode> = () => {

  return <div className="h-full md:h-screen w-full relative"
    style={{backgroundImage: 'url(/art/star.jpg)', backgroundSize: '200px 200px'}}>


    <img src="/art/mountains-sm.png" className="w-full left-0 right-0 bottom-0 z-0 mountains" />

    <div className="container mx-auto py-8 px-8 md:py-auto md:px-20">
      <div className="grid grid-cols-12 h-full md:h-screen intro relative sm:static">

        <div className="col-span-7 items-center hidden md:flex relative z-10">
          <div>
            <h1 className="text-xl text-white relative mb-8 leading-none intro-text">Web Maker</h1>
            <h3 className="text-white lg:text-xl xl:text-2xl intro-subtext">Building the modern web with an eye for design &amp; interaction</h3>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 flex items-center">

          <div className="mx-auto block">
            <div className="grid grid-cols-2 gap-4 mb-8 md:mb-0 intro-squares">
              <div className="col-span-1">
                <img src="intro/concept.svg" alt="Concept" />
              </div>
              <div className="col-span-1">
                <img src="intro/design.svg" alt="Design" />
              </div>
              <div className="col-span-1">
                <img src="intro/code.svg" alt="Code" />
                <img src="icons/arrow-down.svg" alt="See More"
                  className="absolute mx-auto left-0 right-0 -mt-5
                  md:bottom-auto sm:mb-auto hidden md:block" />
              </div>
              <div className="col-span-1">
                <img src="intro/deploy.svg" alt="Deploy" />
              </div>
            </div>

            <div className="max-w-xs block mx-auto md:hidden">

              <h1 className="text-5xl text-gray-100 mb-4 md:mb-8 leading-none">Web Maker</h1>
              <h3 className="text-white lg:text-xl xl:text-2xl intro-subtext">Building the modern web with an eye for design &amp; interaction</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

}

export default Intro
