function Store() {
  return <>
    <div className="py-40 bg-gray-1000">
      <div className="container mx-auto px-24">
        <h3 className="text-center mb-20 text-white text-xl">
          Selected
          <span className="text-teal"> artwork</span> as
          <span className="text-blue font-bold"> prints</span>,
          <span className="text-pink font-bold"> apparel</span> and
          <span className="text-orange font-bold"> other items</span>
        </h3>

        <div className="container mx-auto px-24 grid grid-cols-3 gap-8">
          <div className="col-span-1 rounded-sm">
            <div className="bg-gray-500 h-64 w-full rounded-sm shadow-lg">Card</div>
            <div className="text-gray-100 font-bold mt-4">Red Sweater</div>
            <span className="text-lg text-yellow">$25</span>
          </div>
          <div className="col-span-1 rounded-sm">
            <div className="bg-gray-500 h-64 w-full rounded-sm shadow-lg">Card</div>
            <div className="text-gray-100 font-bold mt-4">Red Sweater</div>
            <span className="text-lg text-yellow">$25</span>
          </div>
          <div className="col-span-1 rounded-sm">
            <div className="bg-gray-500 h-64 w-full rounded-sm shadow-lg">Card</div>
            <div className="text-gray-100 font-bold mt-4">Red Sweater</div>
            <span className="text-lg text-yellow">$25</span>
          </div>
        </div>

      </div>
    </div>
  </>
}

export default Store
