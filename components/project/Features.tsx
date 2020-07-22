const Features: React.FC<React.ReactNode> = () => {

  return <div className="pt-40 pb-32 bg-gray-1000 shadow-2xl">
    <div className="container mx-auto px-10 grid grid-cols-2 gap-6 mb-20 max-w-screen-md">
      <div className="col-span-1">
        <h2 className="text-gray-100 text-2xl mb-10">Design &amp; UI</h2>
        <ul className="text-white text-lg features">
          <li className="mb-6">
            <span className="relative ml-3">Full all day support</span>
          </li>
          <li className="mb-6">
            <span className="relative ml-3">Always open for communication</span>
          </li>
          <li className="mb-6">
            <span className="relative ml-3">Nice work approach</span>
          </li>
          <li className="mb-6">
            <span className="relative ml-3">Best field advisers ever</span>
          </li>
        </ul>
      </div>
      <div className="col-span-1">
        <h2 className="text-gray-100 text-2xl mb-10">Web &amp; Tech</h2>
        <ul className="text-white text-lg features">
          <li className="mb-6">
            <span className="relative ml-3">Full all day support</span>
          </li>
          <li className="mb-6">
            <span className="relative ml-3">Always open for communication</span>
          </li>
          <li className="mb-6">
            <span className="relative ml-3">Nice work approach</span>
          </li>
          <li className="mb-6">
            <span className="relative ml-3">Best field advisers ever</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default Features
