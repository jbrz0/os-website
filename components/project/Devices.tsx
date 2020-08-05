const Devices: React.FC<React.ReactNode> = () => {

  return <>
    <div className="py-12 md:py-20 lg:py-40 bg-gray-1000">
      <div className="container mx-auto px-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3 lg:pt-16">
          <div className="text-gray-300 text-sm mb-6">— Devices</div>
          <h2 className="text-gray-100 text-3xl mb-5">Effective way to make rapid fast</h2>
          <p className="text-gray-200 text-lg mb-8 lg:mb-auto">Design incorporates various devices such as expanding panels, hover effects, and carousels that pose</p>
        </div>
        <div className="hidden lg:block col-span-1"></div>
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="col-span-1">
              <div className="bg-gray-500 rounded-sm mb-4 shadow-xl device-1"></div>
              <div className="text-gray-200 mb-6 hidden sm:block">Web Monitor Mockup</div>

              <div className="bg-gray-500 rounded-sm mb-4 shadow-xl device-2"></div>
              <div className="text-gray-200 hidden sm:block">Tablet Mockup</div>
            </div>
            <div className="col-span-1">
              <div className="bg-gray-500 rounded-sm mb-4 shadow-xl device-3"></div>
              <div className="text-gray-200 mb-6 hidden sm:block">Mobile Phone Mockup</div>

              <div className="bg-gray-500 rounded-sm mb-4 shadow-xl device-4"></div>
              <div className="text-gray-200 mb-6 hidden sm:block">Laptop Mockup</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-1 bg-purple"></div>
  </>
}

export default Devices
