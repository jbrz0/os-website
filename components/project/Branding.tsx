const Branding: React.FC<React.ReactNode> = () => {

  return <>
    <div className="py-12 md:py-24 lg:py-40 bg-gray-1000 px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-12 gap-6 md:mb-16 lg:mb-32">
        <div className="col-span-12 md:col-span-4 md:pt-16">
          <div className="text-gray-300 text-sm mb-6">— Logo</div>
          <h2 className="text-gray-100 text-3xl mb-5 max-w-md md:max-w-none">Effective way to make rapid fast</h2>
          <p className="text-gray-200 text-lg max-w-md md:max-w-none mb-6 md:mb-auto">Design incorporates various devices such as expanding panels, hover effects, and carousels that pose</p>
        </div>
        <div className="hidden md:block col-span-1"></div>
        <div className="col-span-12 md:col-span-7">
          <div className="bg-gray-500 rounded-sm mb-4 shadow-xl" style={{height: '500px'}}></div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <div className="bg-gray-500 rounded-sm mb-4 shadow-xl" style={{height: '500px'}}></div>
        </div>
        <div className="hidden md:block col-span-1"></div>
        <div className="col-span-12 md:col-span-4 pt-10 md:pt-16 row-start-1 md:row-start-auto">
          <div className="text-gray-300 text-sm mb-6">— Brand Assets</div>
          <h2 className="text-gray-100 text-3xl mb-5 max-w-md md:max-w-none">Effective way to make rapid fast</h2>
          <p className="text-gray-200 text-lg max-w-md md:max-w-none mb-6 md:mb-auto">Design incorporates various devices such as expanding panels, hover effects, and carousels that pose</p>
        </div>
      </div>
    </div>
    <div className="w-full h-1 bg-purple"></div>
  </>
}

export default Branding
