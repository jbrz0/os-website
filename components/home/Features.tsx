const Features: React.FC<React.ReactNode> = () => {

  return <div className="px-12 py-16 sm:py-24 md:py-32 lg:p-40 bg-gray-1000 features">
    <div className="container mx-auto px-0">

      <div className="grid grid-cols-2 mb-0 sm:mb-20 features-col mx-auto">
        <div className="col-span-2 sm:col-span-1 relative px-0 sm:px-4 md:px-8 mb-10 sm:mb-auto">
          <h4 className="mb-3 text-white text-xl md:text-2xl float-left">JS, APIs &amp; Markup</h4>
          <div className="h-16 w-16 gr-rad-orange rounded-full absolute -mt-2 sm:-mt-0 right-0 mr-3 lg:mr-8 flex">
            <img src="/icons/features-1.svg" className="mx-auto w-5" />
          </div>
          <div className="w-full h-px gr-orange float-left"></div>
          <p className="text-gray-200 float-left mt-4">Highly performant, secure, and overall a better experience.
          A powerful development setup allowing the use of pre-rendering and CDN's.</p>
        </div>
        <div className="col-span-2 sm:col-span-1 relative px-0 sm:px-4 md:px-8 mb-10 sm:mb-auto">
          <h4 className="mb-3 text-white text-xl md:text-2xl float-left">Responsive UI</h4>
          <div className="h-16 w-16 gr-rad-blue rounded-full absolute -mt-2 sm:-mt-0 right-0 mr-3 lg:mr-8 flex">
            <img src="/icons/features-2.svg" className="mx-auto w-5" />
          </div>
          <div className="w-full h-px gr-blue float-left"></div>
          <p className="text-gray-200 float-left mt-4">Carefully approach each device size and its constraints within the potential user pool.
          Grids, flexbox, fluid, fixed - consider all the tools available.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 mb-0 sm:mb-20 features-col mx-auto">
        <div className="col-span-2 sm:col-span-1 relative px-0 sm:px-4 md:px-8 mb-10 sm:mb-auto">
          <h4 className="mb-3 text-white text-xl md:text-2xl float-left">Performance &amp; A11y</h4>
          <div className="h-16 w-16 gr-rad-green rounded-full absolute -mt-2 sm:-mt-0 right-0 mr-3 lg:mr-8 flex">
            <img src="/icons/features-3.svg" className="mx-auto w-5" />
          </div>
          <div className="w-full h-px gr-green float-left"></div>
          <p className="text-gray-200 float-left mt-4">Using Native browser APIs and developer tools to scan and optimize performance and accessibility sitewide.
          Small adjustments go a long way with both asset &amp; code adjustments.</p>
        </div>
        <div className="col-span-2 sm:col-span-1 relative px-0 sm:px-4 md:px-8 mb-10 sm:mb-auto">
          <h4 className="mb-3 text-white text-xl md:text-2xl float-left">Design Details</h4>
          <div className="h-16 w-16 gr-rad-pink rounded-full absolute -mt-2 sm:-mt-0 right-0 mr-3 lg:mr-8 flex">
            <img src="/icons/features-4.svg" className="mx-auto w-5" />
          </div>
          <div className="w-full h-px gr-pink float-left"></div>
          <p className="text-gray-200 float-left mt-4">Frontend is at an important crossroads in the web between the design and services layer.
          It's important to have a solid foundation to implement properly.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 features-col mx-auto">
        <div className="col-span-2 sm:col-span-1 relative px-0 sm:px-4 md:px-8 mb-10 sm:mb-auto">
          <h4 className="mb-3 text-white text-xl md:text-2xl float-left">Asynchronous Flow</h4>
          <div className="h-16 w-16 gr-rad-teal rounded-full absolute -mt-2 sm:-mt-0 right-0 mr-3 lg:mr-8 flex">
            <img src="/icons/features-5.svg" className="mx-auto w-5" />
          </div>
          <div className="w-full h-px gr-teal float-left"></div>
          <p className="text-gray-200 float-left mt-4">Single page apps, server vs. client side rendering, and playing with the javascript event loop
          have all become important parts of the frontend workflow - and user experience.</p>
        </div>
        <div className="col-span-2 sm:col-span-1 relative px-0 sm:px-4 md:px-8">
          <h4 className="mb-3 text-white text-xl md:text-2xl float-left">Tested &amp; Scaleable</h4>
          <div className="h-16 w-16 gr-rad-yellow rounded-full absolute -mt-2 sm:-mt-0 right-0 mr-3 lg:mr-8 flex">
            <img src="/icons/features-6.svg" className="mx-auto w-5" />
          </div>
          <div className="w-full h-px gr-yellow float-left"></div>
          <p className="text-gray-200 float-left mt-4">When building out a large scale UI framework or application each component can have its own
          self isolated testing. A modular system with tests allows for better scalability.</p>
        </div>
      </div>

    </div>
  </div>
}

export default Features
