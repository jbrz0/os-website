function Intro() {
  return <div className="h-screen w-full">
    <div className="container mx-auto">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-7 flex items-center">
          <div>
            <h1 className="text-xl text-white relative mb-8 leading-none intro-text">Web Maker</h1>
            <h3 className="text-white max-w-sm text-2xl intro-subtext">Building the modern web with an eye for design & interaction</h3>
          </div>
        </div>
        <div className="col-span-5 flex items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <img src="intro/concept.svg" alt="Concept" />
            </div>
            <div className="col-span-1">
              <img src="intro/design.svg" alt="Design" />
            </div>
            <div className="col-span-1">
              <img src="intro/code.svg" alt="Code" />
              <img src="icons/arrow-down.svg" alt="See More"
                className="absolute mx-auto left-0 right-0 -mt-5" />
            </div>
            <div className="col-span-1">
              <img src="intro/deploy.svg" alt="Deploy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default Intro
