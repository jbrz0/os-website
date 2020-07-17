function About() {
  return <div className="h-screen bg-gray-1000">
    <div className="container mx-auto px-24">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-5 flex items-center">
          <div className="bg-gray-500 w-full h-64"></div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-6 flex items-center text-white text-xl">
          <div>
            <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit tenetur, delectus, nesciunt non ratione consectetur voluptas aliquid, culpa nihil suscipit soluta illum ullam corrupti commodi! Nam aspernatur dolor labore!</p>

            <div className="grid grid-cols-7">
              <div className="col-span-3">
                <h2 className="uppercase mb-4">Design</h2>
                <ul className="text-gray-200">
                  <li>Test 1</li>
                  <li>Test 2</li>
                  <li>Test 3</li>
                </ul>
              </div>
              <div className="col-span-3">
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
