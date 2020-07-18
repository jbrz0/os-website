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
          {/* <RightArrow fill="#4028FB" /> */}
          <svg className="fill-current text-purple group-hover:text-teal inline-block mr-3" width="22" height="23" viewBox="0 0 22 23" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 6.88713C14.6834 6.49661 15.3166 6.49661 15.7071 6.88713L19.7065 10.8865L19.7071 10.8871C19.803 10.983 19.8753 11.0935 19.9241 11.2115C19.973 11.3294 20 11.4586 20 11.5942C20 11.7293 19.9732 11.8581 19.9247 11.9756C19.9006 12.034 19.8708 12.0906 19.8352 12.1445C19.7986 12.1999 19.7559 12.2525 19.7071 12.3013L19.7065 12.3019L15.7071 16.3013C15.3166 16.6918 14.6834 16.6918 14.2929 16.3013C13.9024 15.9108 13.9024 15.2777 14.2929 14.8871L16.5858 12.5942H3C2.44771 12.5942 2 12.1465 2 11.5942C2 11.042 2.44771 10.5942 3 10.5942H16.5858L14.2929 8.30135C13.9024 7.91082 13.9024 7.27766 14.2929 6.88713Z" />
          </svg>
          <span className="inline-block text-gray-300 opacity-50 group-hover:text-gray-100">Read More</span>
        </div>
        <div className="col-span-1 bg-gray-100 rounded-sm shadow-lg p-8 group cursor-pointer hover:bg-purple">
          <h6 className="text-gray-300 text-sm mb-3 group-hover:text-gray-200">Sep 12, 2021</h6>
          <h2 className="font-bold text-2xl mb-5 group-hover:text-gray-100">Effective way to make rapid fast prototype</h2>
          <p className="text-md text-gray-500 mb-20 group-hover:text-gray-200">Another difficulty with wireframes is that they don't effectively show</p>
          {/* <RightArrow fill="#4028FB" /> */}
          <svg className="fill-current text-purple group-hover:text-teal inline-block mr-3" width="22" height="23" viewBox="0 0 22 23" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 6.88713C14.6834 6.49661 15.3166 6.49661 15.7071 6.88713L19.7065 10.8865L19.7071 10.8871C19.803 10.983 19.8753 11.0935 19.9241 11.2115C19.973 11.3294 20 11.4586 20 11.5942C20 11.7293 19.9732 11.8581 19.9247 11.9756C19.9006 12.034 19.8708 12.0906 19.8352 12.1445C19.7986 12.1999 19.7559 12.2525 19.7071 12.3013L19.7065 12.3019L15.7071 16.3013C15.3166 16.6918 14.6834 16.6918 14.2929 16.3013C13.9024 15.9108 13.9024 15.2777 14.2929 14.8871L16.5858 12.5942H3C2.44771 12.5942 2 12.1465 2 11.5942C2 11.042 2.44771 10.5942 3 10.5942H16.5858L14.2929 8.30135C13.9024 7.91082 13.9024 7.27766 14.2929 6.88713Z" />
          </svg>
          <span className="inline-block text-gray-300 opacity-50 group-hover:text-gray-100">Read More</span>
        </div>
        <div className="col-span-1 bg-gray-100 rounded-sm shadow-lg p-8 group cursor-pointer hover:bg-purple">
          <h6 className="text-gray-300 text-sm mb-3 group-hover:text-gray-200">Sep 12, 2021</h6>
          <h2 className="font-bold text-2xl mb-5 group-hover:text-gray-100">Effective way to make rapid fast prototype</h2>
          <p className="text-md text-gray-500 mb-20 group-hover:text-gray-200">Another difficulty with wireframes is that they don't effectively show</p>
          {/* <RightArrow fill="#4028FB" /> */}
          <svg className="fill-current text-purple group-hover:text-teal inline-block mr-3" width="22" height="23" viewBox="0 0 22 23" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 6.88713C14.6834 6.49661 15.3166 6.49661 15.7071 6.88713L19.7065 10.8865L19.7071 10.8871C19.803 10.983 19.8753 11.0935 19.9241 11.2115C19.973 11.3294 20 11.4586 20 11.5942C20 11.7293 19.9732 11.8581 19.9247 11.9756C19.9006 12.034 19.8708 12.0906 19.8352 12.1445C19.7986 12.1999 19.7559 12.2525 19.7071 12.3013L19.7065 12.3019L15.7071 16.3013C15.3166 16.6918 14.6834 16.6918 14.2929 16.3013C13.9024 15.9108 13.9024 15.2777 14.2929 14.8871L16.5858 12.5942H3C2.44771 12.5942 2 12.1465 2 11.5942C2 11.042 2.44771 10.5942 3 10.5942H16.5858L14.2929 8.30135C13.9024 7.91082 13.9024 7.27766 14.2929 6.88713Z" />
          </svg>
          <span className="inline-block text-gray-300 opacity-50 group-hover:text-gray-100">Read More</span>
        </div>
      </div>
    </div>
  </>
}

export default Labs
