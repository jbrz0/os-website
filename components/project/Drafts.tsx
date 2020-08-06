const Drafts: React.FC<React.ReactNode> = () => {

  return <div className="py-20 md:py-32 lg:py-40 bg-black shadow-2xl">
    <div className="container mx-auto px-10 lg:px-12 xl:px-20 grid grid-cols-4 gap-6">
      <div className="max-w-xs sm:max-w-none mx-auto w-full col-span-4 sm:col-span-2 lg:col-span-1">
        <div className="bg-gray-500 h-48 rounded-sm mb-4"></div>
        <div className="text-gray-200">Wireframes and Sketches</div>
      </div>
      <div className="max-w-xs sm:max-w-none mx-auto w-full col-span-4 sm:col-span-2 lg:col-span-1">
        <div className="bg-gray-500 h-48 rounded-sm mb-4"></div>
        <div className="text-gray-200">Quick One Liner</div>
      </div>
      <div className="max-w-xs sm:max-w-none mx-auto w-full col-span-4 sm:col-span-2 lg:col-span-1">
        <div className="bg-gray-500 h-48 rounded-sm mb-4"></div>
        <div className="text-gray-200">Descriptions</div>
      </div>
      <div className="max-w-xs sm:max-w-none mx-auto w-full col-span-4 sm:col-span-2 lg:col-span-1">
        <div className="bg-gray-500 h-48 rounded-sm mb-4"></div>
        <div className="text-gray-200">Concept Development</div>
      </div>
    </div>
  </div>
}

export default Drafts
