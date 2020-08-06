const Screenshots: React.FC<React.ReactNode> = () => {

  return <div className="py-20 md:py-32 lg:py-40 bg-black shadow-2xl">
    <div className="container mx-auto px-10 grid grid-cols-2 gap-3 md:gap-6 mb-0 sm:mb-12 lg:mb-20">
      <div className="col-span-1">
        <div className="bg-gray-500 rounded-sm mb-3 sm:mb-4 screenshot-1"></div>
        <div className="text-gray-200 hidden sm:block">Desktop UI Screenshot</div>
      </div>
      <div className="col-span-1">
        <div className="bg-gray-500 rounded-sm mb-3 sm:mb-4 screenshot-2"></div>
        <div className="text-gray-200 hidden sm:block">Desktop UI Screenshot</div>
      </div>
    </div>

    <div className="container mx-auto px-10 grid grid-cols-3 gap-3 md:gap-6">
      <div className="col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4 screenshot-3"></div>
        <div className="text-gray-200 hidden sm:block">Desktop UI Screenshot</div>
      </div>
      <div className="col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4 screenshot-4"></div>
        <div className="text-gray-200 hidden sm:block">Desktop UI Screenshot</div>
      </div>
      <div className="col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4 screenshot-5"></div>
        <div className="text-gray-200 hidden sm:block">Desktop UI Screenshot</div>
      </div>
    </div>
  </div>
}

export default Screenshots
