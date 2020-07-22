import Button from '../shared/Button'

const Project2: React.FC<React.ReactNode> = () => {

  return <div className="py-40 bg-gray-1000 shadow-2xl">
    <div className="container mx-auto px-24 grid grid-cols-2">

      <div className="col-span-1">
        <img src="projects/display2.png" className="block mx-auto" />
      </div>

      <div className="col-span-1 pl-20 pt-6">
        <div className="max-w-xl mx-auto block">
          <h2 className="text-white text-3xl mb-4">Buck Net</h2>
          <p className="text-gray-200 max-w-sm mb-16 mt-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Possimus similique sapiente ipsam commodi doloribus ipsam commodi doloribus.
          </p>
          <div className="mt-8 mb-24">
            <Button href="#" className="text-gray-200 btn-default mr-4 text-lg">Visit Site</Button>
            <Button href="#" className="text-white gr-tw-2 text-lg">View Project</Button>
          </div>
        </div>
      </div>

    </div>
  </div>
}

export default Project2
