import Button from '../shared/Button'

const Project1: React.FC<React.ReactNode> = () => {

  return <div className="pt-40 bg-gray-1000 shadow-2xl">
    <div className="container mx-auto px-24">
      <div className="max-w-xl mx-auto block">
        <h2 className="text-white text-center text-3xl mb-4">Great Lake</h2>
        <p className="text-gray-200 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Possimus similique sapiente ipsam commodi doloribus ipsam commodi doloribus.
        </p>
        <div className="flex justify-center mt-8 mb-24">
          <Button href="#" className="text-gray-200 btn-default mr-4">Visit Site</Button>
          <Button href="#" className="text-white gr-tw-1">View Project</Button>
        </div>
      </div>

      <img src="projects/display1.png" className="block mx-auto" />
    </div>
  </div>
}

export default Project1
