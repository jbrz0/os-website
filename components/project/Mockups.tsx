const Mockups: React.FC<React.ReactNode> = () => {

  return <div className="py-20 md:py-32 lg:py-40 bg-black shadow-2xl">
    <div className="container mx-auto px-10 lg:px-12 xl:px-20 grid grid-cols-4 gap-6">
      <div className="max-w-xs sm:max-w-none mx-auto w-full col-span-4 sm:col-span-2 lg:col-span-1">
        <div className="bg-gray-500 h-48 rounded-sm mb-4"></div>
        <div className="text-gray-200">Product Mockups</div>
      </div>
      <div className="max-w-xs sm:max-w-none mx-auto w-full col-span-4 sm:col-span-2 lg:col-span-1">
        <div className="bg-gray-500 h-48 rounded-sm mb-4"></div>
        <div className="text-gray-200">Cups, Shirt, Sign etc.</div>
      </div>
      <div className="max-w-xs sm:max-w-none mx-auto w-full col-span-4 sm:col-span-2 lg:col-span-1">
        <div className="bg-gray-500 h-48 rounded-sm mb-4"></div>
        <div className="text-gray-200">With Brief Description</div>
      </div>
      <div className="max-w-xs sm:max-w-none mx-auto w-full col-span-4 sm:col-span-2 lg:col-span-1">
        <div className="bg-gray-500 h-48 rounded-sm mb-4"></div>
        <div className="text-gray-200">Text Description</div>
      </div>
    </div>
  </div>
}

export default Mockups

