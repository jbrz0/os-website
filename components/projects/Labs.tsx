import Button from '../shared/Button'

const Labs: React.FC<React.ReactNode> = () => {

  return <div className="pt-40 pb-32 bg-red shadow-2xl -mt-20 group">
    <div className="container mx-auto px-10 grid grid-cols-4 max-w-lg lg:max-w-5xl">
      <div className="col-span-4 lg:col-span-1 mb-3 lg:mb-auto">
        <h2 className="text-white text-4xl crosshair">
          <span className="text-blue group-hover:text-yellow">/</span>
          Labs
        </h2>
      </div>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-auto">
        <p className="text-white text-lg text-white opacity-75">A showcase of various design,
        frontend and web related (mini) projects. Testing ground for new
        tools &amp; tricks.</p>
      </div>

      <div className="col-span-4 lg:col-span-1 lg:pl-16">
        <Button href="/labs" className="text-white bg-purple block text-lg inline-block">View Labs</Button>
      </div>
    </div>
  </div>
}

export default Labs
