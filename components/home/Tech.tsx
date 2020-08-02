import Link from 'next/link'

const Tech: React.FC<React.ReactNode> = () => {

  return <div className="py-12 sm:py-20 md:py-40 bg-black shadow-2xl">
    <h4 className="text-white text-center text-2xl mb-8 lg:mb-12">Tech &amp; Software</h4>

    <div className="mx-auto px-12 sm:px-6 lg:px-12 xl:px-12 max-w-lg
    lg:max-w-screen-lg grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12
    gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 lg:mb-4 tech-card">
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
    <div className="mx-auto px-12 sm:px-6 lg:px-12 xl:px-12 max-w-lg
    lg:max-w-screen-lg grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12
    gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 lg:mb-4 tech-card">
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
    <div className="mx-auto px-12 sm:px-6 lg:px-12 xl:px-12 max-w-lg
    lg:max-w-screen-lg grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12
    gap-2 sm:gap-3 lg:gap-4 tech-card">
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

    <div className="container mx-auto text-sm text-center text-slate-300 mt-10 px-12">
      See how this <Link href="#">
        <a className="underline hover:no-underline hover:opacity-75">
        all comes together</a>
      </Link>, or <Link href="#">
        <a className="underline hover:no-underline hover:opacity-75">
        individual labs
      </a></Link>
    </div>
  </div>
}

export default Tech
