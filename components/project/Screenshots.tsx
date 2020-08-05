const Screenshots: React.FC<React.ReactNode> = () => {

  return <div className="py-20 md:py-32 lg:py-40 bg-black shadow-2xl">
    <div className="container mx-auto px-10 grid grid-cols-2 gap-4 md:gap-6 mb-12 lg:mb-20">
      <div className="col-span-2 sm:col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4 screenshot-1"></div>
        <div className="text-gray-200">Desktop UI Screenshot</div>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4 screenshot-2"></div>
        <div className="text-gray-200">Desktop UI Screenshot</div>
      </div>
    </div>

    <div className="container mx-auto px-10 grid grid-cols-3 gap-4 md:gap-6">
      <div className="col-span-2 sm:col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4 screenshot-3"></div>
        <div className="text-gray-200">Desktop UI Screenshot</div>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4 screenshot-4"></div>
        <div className="text-gray-200">Desktop UI Screenshot</div>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4 screenshot-5"></div>
        <div className="text-gray-200">Desktop UI Screenshot</div>
      </div>
    </div>
  </div>
}

export default Screenshots
