const Intro: React.FC<React.ReactNode> = () => {

  return <div className="h-screen bg-black">
    <div className="container mx-auto px-24">

      <div className="absolute left-0 right-0 mx-auto px-12 z-10 proj-intro-txt"
      >
        <h1 className="text-white text-center text-4xl md:text-5xl">Project Name</h1>
        <h3 className="text-gray-200 text-center my-3 mx-auto max-w-xl block text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          corporis fugit reiciendis aliquam
        </h3>
      </div>

      <div className="bg-gray-500 absolute bottom-0 left-0 right-0 top-0 lg:top-auto w-full proj-intro-img"
      style={{borderTopLeftRadius: '0.125rem', borderTopRightRadius: '0.125rem'}}
      ></div>

      <img src="icons/arrow-down.svg" alt="See More"
        className="absolute mx-auto left-0 right-0" style={{bottom: `2rem`}} />
    </div>
  </div>
}

export default Intro

// left: '10rem', right: '10rem',
