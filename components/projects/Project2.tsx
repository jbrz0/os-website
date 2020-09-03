import Button from '../shared/Button'

const Project2: React.FC<React.ReactNode> = () => {

  return <div className="pt-16 sm:pt-24 pb-0 lg:py-40 bg-gray-1000 shadow-2xl">
    <div className="container mx-auto px-10 lg:px-24 grid grid-cols-2">

      <div className="col-span-2 lg:col-span-1">
        <img src="projects/display2.png" className="block mx-auto max-w-lg lg:max-w-full mb-4 lg:mb-auto w-full" />
      </div>

      <div className="col-span-2 lg:col-span-1 pl-6 lg:pl-20 pt-6">
        <div className="max-w-xl mx-auto block">
          <h2 className="text-white text-3xl mb-4">Buck Net</h2>
          <p className="text-gray-200 max-w-sm mb-10 mt-8">
            Using the vast amounts of financial data out there, this project builds a crypto dashboard overview
          </p>
          <div className="mt-8 mb-24">
            <Button href="/lab/crypto-dashboard" className="mb-4 inline-block text-gray-200 btn-default mr-4 text-lg">View Site</Button>
            <Button href="/blog/crypto-dashboard" className="mb-4 inline-block text-white gr-tw-2 text-lg">View Post</Button>
          </div>
        </div>
      </div>

    </div>
  </div>
}

export default Project2
