import Link from 'next/link'

const Tech: React.FC<React.ReactNode> = () => {

  return <div className="py-40 bg-black shadow-2xl">
    <h4 className="text-white text-center text-2xl mb-12">Tech &amp; Software</h4>

    <div className="container mx-auto px-24 grid grid-cols-12 gap-4 mb-4">
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
    </div>
    <div className="container mx-auto px-24 grid grid-cols-12 gap-4 mb-4">
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
    </div>
    <div className="container mx-auto px-24 grid grid-cols-12 gap-4">
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
      <div className="col-span-1 bg-gray-1000 rounded h-16"></div>
    </div>

    <div className="container mx-auto px-24 text-gray-200 mt-8">
      See how this <Link href="#">
        <a className="italic underline hover:no-underline hover:opacity-75">
        all comes together</a>
      </Link>, or <Link href="#">
        <a className="italic underline hover:no-underline hover:opacity-75">
        individual labs
      </a></Link>
    </div>
  </div>
}

export default Tech
