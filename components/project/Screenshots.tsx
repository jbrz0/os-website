const Screenshots: React.FC<React.ReactNode> = () => {

  return <div className="pt-40 pb-32 bg-black shadow-2xl">
    <div className="container mx-auto px-10 grid grid-cols-2 gap-6 mb-20">
      <div className="col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4" style={{height: '370px'}}></div>
        <div className="text-gray-200">Desktop UI Screenshot</div>
      </div>
      <div className="col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4" style={{height: '370px'}}></div>
        <div className="text-gray-200">Desktop UI Screenshot</div>
      </div>
    </div>

    <div className="container mx-auto px-10 grid grid-cols-3 gap-6">
      <div className="col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4" style={{height: '580px'}}></div>
        <div className="text-gray-200">Desktop UI Screenshot</div>
      </div>
      <div className="col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4" style={{height: '580px'}}></div>
        <div className="text-gray-200">Desktop UI Screenshot</div>
      </div>
      <div className="col-span-1">
        <div className="bg-gray-500 rounded-sm mb-4" style={{height: '580px'}}></div>
        <div className="text-gray-200">Desktop UI Screenshot</div>
      </div>
    </div>
  </div>
}

export default Screenshots
