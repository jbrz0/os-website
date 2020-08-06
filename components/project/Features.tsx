const Features: React.FC<React.ReactNode> = () => {

  return <div className="py-16 md:py-24 lg:py-40 bg-gray-1000 shadow-2xl proj-features-wrap">
    <div className="container mx-auto px-10 grid grid-cols-2 gap-6 max-w-screen-md">
      <div className="pl-0 sm:pl-4 md:pl-auto col-span-2 md:col-span-1">
        <h2 className="text-gray-100 text-2xl mb-10">Design &amp; UI</h2>
        <ul className="text-white text-lg proj-features">
          <li className="mb-6">
            <span className="text-sm sm:text-base relative ml-3">Full all day support</span>
          </li>
          <li className="mb-6">
            <span className="text-sm sm:text-base relative ml-3">Always open for communication</span>
          </li>
          <li className="mb-6">
            <span className="text-sm sm:text-base relative ml-3">Nice work approach</span>
          </li>
          <li className="mb-6">
            <span className="text-sm sm:text-base relative ml-3">Best field advisers ever</span>
          </li>
        </ul>
      </div>
      <div className="pl-0 sm:pl-4 md:pl-auto md:pl-auto col-span-2 md:col-span-1">
        <h2 className="text-gray-100 text-2xl mb-10">Web &amp; Tech</h2>
        <ul className="text-white text-lg proj-features">
          <li className="mb-6">
            <span className="text-sm sm:text-base relative ml-3">Full all day support</span>
          </li>
          <li className="mb-6">
            <span className="text-sm sm:text-base relative ml-3">Always open for communication</span>
          </li>
          <li className="mb-6">
            <span className="text-sm sm:text-base relative ml-3">Nice work approach</span>
          </li>
          <li className="">
            <span className="text-sm sm:text-base relative ml-3">Best field advisers ever</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default Features
