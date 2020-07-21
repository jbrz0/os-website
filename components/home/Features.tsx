const Features: React.FC<React.ReactNode> = () => {

  return <div className="p-40 bg-gray-1000">
    <div className="container mx-auto px-24">

      <div className="grid grid-cols-12 mb-20">
        <div className="col-span-2"></div>
        <div className="col-span-4 relative px-8">
          <h4 className="mb-3 text-white text-2xl float-left">JS, APIs &amp; Markup</h4>
          <div className="h-16 w-16 gr-rad-orange rounded-full absolute right-0 mr-8 flex">
            <img src="/icons/features-1.svg" className="mx-auto" />
          </div>
          <div className="w-full h-px gr-orange float-left"></div>
          <p className="text-gray-200 float-left mt-4">Modular and clean code is built with a set of modern tools that help with this. Frameworks, CLI tools, software and workflow patterns.</p>
        </div>
        <div className="col-span-4 relative px-8">
          <h4 className="mb-3 text-white text-2xl float-left">Responsive Behaviour</h4>
          <div className="h-16 w-16 gr-rad-blue rounded-full absolute right-0 mr-8 flex">
            <img src="/icons/features-2.svg" className="mx-auto" />
          </div>
          <div className="w-full h-px gr-blue float-left"></div>
          <p className="text-gray-200 float-left mt-4">Modular and clean code is built with a set of modern tools that help with this. Frameworks, CLI tools, software and workflow patterns.</p>
        </div>
        <div className="col-span-2"></div>
      </div>

      <div className="grid grid-cols-12 mb-20">
        <div className="col-span-2"></div>
        <div className="col-span-4 relative px-8">
          <h4 className="mb-3 text-white text-2xl float-left">Performance &amp; A11y</h4>
          <div className="h-16 w-16 gr-rad-green rounded-full absolute right-0 mr-8 flex">
            <img src="/icons/features-3.svg" className="mx-auto" />
          </div>
          <div className="w-full h-px gr-green float-left"></div>
          <p className="text-gray-200 float-left mt-4">Modular and clean code is built with a set of modern tools that help with this. Frameworks, CLI tools, software and workflow patterns.</p>
        </div>
        <div className="col-span-4 relative px-8">
          <h4 className="mb-3 text-white text-2xl float-left">Design Details</h4>
          <div className="h-16 w-16 gr-rad-pink rounded-full absolute right-0 mr-8 flex">
            <img src="/icons/features-4.svg" className="mx-auto" />
          </div>
          <div className="w-full h-px gr-pink float-left"></div>
          <p className="text-gray-200 float-left mt-4">Modular and clean code is built with a set of modern tools that help with this. Frameworks, CLI tools, software and workflow patterns.</p>
        </div>
        <div className="col-span-2"></div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-4 relative px-8">
          <h4 className="mb-3 text-white text-2xl float-left">Asynchronous Flow</h4>
          <div className="h-16 w-16 gr-rad-teal rounded-full absolute right-0 mr-8 flex">
            <img src="/icons/features-5.svg" className="mx-auto" />
          </div>
          <div className="w-full h-px gr-teal float-left"></div>
          <p className="text-gray-200 float-left mt-4">Modular and clean code is built with a set of modern tools that help with this. Frameworks, CLI tools, software and workflow patterns.</p>
        </div>
        <div className="col-span-4 relative px-8">
          <h4 className="mb-3 text-white text-2xl float-left">Tested &amp; Scaleable</h4>
          <div className="h-16 w-16 gr-rad-yellow rounded-full absolute right-0 mr-8 flex">
            <img src="/icons/features-6.svg" className="mx-auto" />
          </div>
          <div className="w-full h-px gr-yellow float-left"></div>
          <p className="text-gray-200 float-left mt-4">Modular and clean code is built with a set of modern tools that help with this. Frameworks, CLI tools, software and workflow patterns.</p>
        </div>
        <div className="col-span-2"></div>
      </div>

    </div>
  </div>
}

export default Features
// gr-rad-orange
// gr-rad-blue
// gr-rad-green
// gr-rad-pink
// gr-rad-teal
// gr-rad-yellow
