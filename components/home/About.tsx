const About: React.FC<React.ReactNode> = () => {

  return <div className="px-12 py-12 md:py-40 h-auto bg-gray-900 about">
    <div className="container mx-auto md:px-12 lg:px-24">

      <div className="grid grid-cols-12 md:h-full">
        <div className="col-span-12 md:col-span-5 flex items-center">
          <div className="bg-gray-500 w-full h-64 mb-10"></div>
        </div>
        <div className="hidden md:flex md:col-span-1"></div>
        <div className="col-span-12 md:col-span-6 flex items-center text-white text-xl">
          <div>
            <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit tenetur, delectus, nesciunt non ratione consectetur voluptas aliquid, culpa nihil suscipit soluta illum ullam corrupti commodi! Nam aspernatur dolor labore!</p>

            <div className="grid grid-cols-7">
              <div className="col-span-7 md:col-span-3 mb-8 md:mb-auto">
                <h2 className="uppercase mb-4">Design</h2>
                <ul className="text-gray-200">
                  <li>Test 1</li>
                  <li>Test 2</li>
                  <li>Test 3</li>
                </ul>
              </div>
              <div className="col-span-7 md:col-span-3">
              <h2 className="uppercase mb-4">Tech</h2>
                <ul className="text-gray-200">
                  <li className="text-hot-pink font-bold">Frontend Dev</li>
                  <li>Test 2</li>
                  <li>Test 3</li>
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
