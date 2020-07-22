import Link from 'next/link'

const Next: React.FC<React.ReactNode> = () => {

  return <div className="pt-40 pb-32 bg-red shadow-2xl">
    <div className="container mx-auto px-10 mb-20 max-w-screen-lg">

    <Link href="#"><a>
      <div className="grid grid-cols-8 hover:opacity-75">
        <div className="col-span-6">
          <div className="text-gray-100 text-lg">Next Project</div>
          <h3 className="text-gray-100 text-4xl mb-10">
            Short description about next project and some quick features overview
          </h3>
        </div>
        <div className="col-span-2">
            <div className="bg-purple float-right w-20 h-20 rounded-full flex align-center mt-10">
              <img src="icons/arrow-right.svg" className="block mx-auto" />
            </div>
        </div>
      </div>
    </a></Link>

    </div>
  </div>
}

export default Next
