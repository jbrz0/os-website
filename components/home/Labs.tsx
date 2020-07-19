import labData from './labData'
import RightArrow from './RightArrow'

function Labs() {

  return <>
    <div className="py-40 bg-gray-1000">
      <div className="container mx-auto px-24">
        <div className="rounded-sm mb-8 bg-cover bg-center"
          style={{backgroundImage: `url(${labData[1].image})`}}>
          <div className="w-full h-full gr-tp-purple pt-20 pb-64 px-24 bg-fixed">
            <p className="text-teal text-md">{labData[0].category}</p>
            <h3 className="text-white text-xl font-bold">{labData[0].title}</h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-24 grid grid-cols-3 gap-8">
        <div className="col-span-1 rounded-sm">
          <img src={labData[1].image} className="w-20 h-20 float-left mr-4 rounded-sm object-cover" />
          <p className="text-blue text-md">{labData[1].category}</p>
          <h6 className="text-gray-100">{labData[1].title}</h6>
        </div>
        <div className="col-span-1 rounded-sm">
          <img src={labData[2].image} className="w-20 h-20 float-left mr-4 rounded-sm object-cover" />
          <p className="text-pink text-md">{labData[2].category}</p>
          <h6 className="text-gray-100">{labData[2].title}</h6>
        </div>
        <div className="col-span-1 rounded-sm">
          <img src={labData[3].image} className="w-20 h-20 float-left mr-4 rounded-sm object-cover" />
          <p className="text-yellow text-md">{labData[3].category}</p>
          <h6 className="text-gray-100">{labData[3].title}</h6>
        </div>
      </div>
    </div>

    <div className="py-40 bg-black bg-cover bg-no-repeat bg-contain shadow-2xl" style={{backgroundImage: `url(/icons/waves.svg)`}}>
      <div className="container mx-auto px-24 grid grid-cols-3 gap-8">
        <div className="col-span-1 bg-gray-100 rounded-sm shadow-lg p-8 group cursor-pointer hover:bg-purple">
          <h6 className="text-gray-300 text-sm mb-3 group-hover:text-gray-200">Sep 12, 2021</h6>
          <h2 className="font-bold text-2xl mb-5 group-hover:text-gray-100">Effective way to make rapid fast prototype</h2>
          <p className="text-md text-gray-500 mb-20 group-hover:text-gray-200">Another difficulty with wireframes is that they don't effectively show</p>

          <RightArrow
            arrowHover="group-hover:text-teal"
            txtHover="group-hover:text-gray-100" />
        </div>
        <div className="col-span-1 bg-gray-100 rounded-sm shadow-lg p-8 group cursor-pointer hover:bg-purple">
          <h6 className="text-gray-300 text-sm mb-3 group-hover:text-gray-200">Sep 12, 2021</h6>
          <h2 className="font-bold text-2xl mb-5 group-hover:text-gray-100">Effective way to make rapid fast prototype</h2>
          <p className="text-md text-gray-500 mb-20 group-hover:text-gray-200">Another difficulty with wireframes is that they don't effectively show</p>

          <RightArrow
            arrowHover="group-hover:text-teal"
            txtHover="group-hover:text-gray-100" />
        </div>
        <div className="col-span-1 bg-gray-100 rounded-sm shadow-lg p-8 group cursor-pointer hover:bg-purple">
          <h6 className="text-gray-300 text-sm mb-3 group-hover:text-gray-200">Sep 12, 2021</h6>
          <h2 className="font-bold text-2xl mb-5 group-hover:text-gray-100">Effective way to make rapid fast prototype</h2>
          <p className="text-md text-gray-500 mb-20 group-hover:text-gray-200">Another difficulty with wireframes is that they don't effectively show</p>

          <RightArrow
            arrowHover="group-hover:text-teal"
            txtHover="group-hover:text-gray-100" />
        </div>
      </div>
    </div>
  </>
}

export default Labs
