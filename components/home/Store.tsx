const Store: React.FC<React.ReactNode> = () => {

  return <>
    <div className="py-20 lg:py-40 bg-gray-1000">
      <div className="container mx-auto px-12 lg:px-24">
        <h3 className="text-center mb-20 text-white text-xl">
          Selected
          <span className="text-teal"> artwork</span> as
          <span className="text-blue font-bold"> prints</span>,
          <span className="text-pink font-bold"> apparel</span> and
          <span className="text-orange font-bold"> other items</span>
        </h3>

        <div className="container mx-auto px-0 xl:px-24 grid grid-cols-3 gap-5 md:gap-8">
          <div className="col-span-3 md:col-span-1 rounded-sm max-w-sm md:max-w-none mx-auto w-full">
            <div className="shadow-xl bg-gray-500 h-56 lg:h-64 w-full rounded-sm shadow-lg">Card</div>
            <div className="text-gray-100 font-bold mt-2 md:mt-4">Red Sweater</div>
            <span className="text-lg text-yellow mb-4 md:mb-auto">$25</span>
          </div>
          <div className="col-span-3 md:col-span-1 rounded-sm max-w-sm md:max-w-none mx-auto w-full">
            <div className="shadow-xl bg-gray-500 h-56 lg:h-64 w-full rounded-sm shadow-lg">Card</div>
            <div className="text-gray-100 font-bold mt-2 md:mt-4">Red Sweater</div>
            <span className="text-lg text-yellow mb-4 md:mb-auto">$25</span>
          </div>
          <div className="col-span-3 md:col-span-1 rounded-sm max-w-sm md:max-w-none mx-auto w-full">
            <div className="shadow-xl bg-gray-500 h-56 lg:h-64 w-full rounded-sm shadow-lg">Card</div>
            <div className="text-gray-100 font-bold mt-2 md:mt-4">Red Sweater</div>
            <span className="text-lg text-yellow">$25</span>
          </div>
        </div>

      </div>
    </div>
  </>
}

export default Store
