const Branding: React.FC<React.ReactNode> = () => {

  return <>
    <div className="pt-40 pb-32 bg-gray-1000">
      <div className="container mx-auto px-10 grid grid-cols-12 gap-6 mb-32">
        <div className="col-span-4 pt-16">
          <div className="text-gray-300 text-sm mb-6">— Logo</div>
          <h2 className="text-gray-100 text-3xl mb-5">Effective way to make rapid fast</h2>
          <p className="text-gray-200 text-lg">Design incorporates various devices such as expanding panels, hover effects, and carousels that pose</p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-7">
          <div className="bg-gray-500 rounded-sm mb-4 shadow-xl" style={{height: '500px'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-10 grid grid-cols-12 gap-6">
        <div className="col-span-7">
          <div className="bg-gray-500 rounded-sm mb-4 shadow-xl" style={{height: '500px'}}></div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4 pt-16">
          <div className="text-gray-300 text-sm mb-6">— Brand Assets</div>
          <h2 className="text-gray-100 text-3xl mb-5">Effective way to make rapid fast</h2>
          <p className="text-gray-200 text-lg">Design incorporates various devices such as expanding panels, hover effects, and carousels that pose</p>
        </div>
      </div>
    </div>
    <div className="w-full h-1 bg-purple"></div>
  </>
}

export default Branding
