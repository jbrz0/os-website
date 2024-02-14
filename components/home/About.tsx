const About: React.FC<React.ReactNode> = () => {

  return <div className="px-12 py-12 md:py-40 h-auto bg-gray-900 about relative">
    <div className="container mx-auto md:px-12 lg:px-24">

      <div className="grid grid-cols-12 md:h-full">
        <div className="col-span-12 md:col-span-5 flex items-center">
          <img src="/art/avatar-illustration.png"
            className="w-full ml-0 md:mx-auto mb-10 pr-40 md:mb-0 md:px-4 relative z-10 md:z-0"
            style={{maxWidth: '350px'}}
          />
        </div>
        <div className="hidden md:flex md:col-span-1"></div>
        <div className="col-span-12 md:col-span-6 flex items-center text-white text-lg lg:text-xl relative z-0 md:z-10">
          <div>
            <img
              src="/home/profile.jpg"
              className="w-24 h-24 mb-6 rounded-full object-cover
              hidden md:block
              absolute top-0 left-0 z-0 about-profile
              md:static md:mt-0 md:ml-0"
            />
            <p className="mb-8">Hi, my name is Justin Brazeau and I’m a Canadian web designer.
            I've been designing and building websites since the early days of Geocities.
            <br /><br />
            Lately I'm focused on product & UI design, frontend development and working with teams on the product side to build web software. 
            </p>
            

            <div className="grid grid-cols-7">
              <div className="col-span-7 md:col-span-3 mb-8 md:mb-auto">
                <h2 className="uppercase mb-4 md:pr-4">Design</h2>
                <ul className="text-gray-200 md:pr-4">
                  <li className="gr-rb-dark gr-rb-dark-home mb-3">Web &amp; UI Design</li>
                  <li className="mb-3">Visual Design</li>
                  <li className="mb-3">UX & Prototyping</li>
                </ul>
              </div>
              <div className="col-span-7 md:col-span-3">
              <h2 className="uppercase mb-4 md:pl-4">Tech</h2>
                <ul className="text-gray-200 md:pl-4">
                  <li className="gr-rb-dark mb-3">Frontend Dev</li>
                  <li className="mb-3">Backend Integration</li>
                  <li className="mb-3">DevOps &amp; Admin</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
}

export default About
