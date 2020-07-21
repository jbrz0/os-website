import Link from 'next/link'

const Footer: React.FC<React.ReactNode> = () => {

  // Scroll to top of page
  function scrollTop() {
    const pos: object = {top: 0, left: 0, behavior: 'smooth'}
    if (window) window.scrollTo(pos)
  }

  return <div className="bg-gray-900 shadow-lg relative flex justify-center">
    <img src="balance.svg" alt="Odd Scenes Favicon" className="absolute left-0 bottom-0" />

    <span className="text-gray-400 text-sm ml-32 absolute left-0 mt-5">v12</span>

    <div className="max-w-md py-5">
      <Link href="#"><a className="float-left mx-2 hover:opacity-75"><img src="social/a-email.svg" alt=""/></a></Link>
      <Link href="#"><a className="float-left mx-2 hover:opacity-75"><img src="social/b-twitter.svg" alt=""/></a></Link>
      <Link href="#"><a className="float-left mx-2 hover:opacity-75"><img src="social/c-github.svg" alt=""/></a></Link>
      <Link href="#"><a className="float-left mx-2 hover:opacity-75"><img src="social/d-behance.svg" className="behance" alt=""/></a></Link>
      <Link href="#"><a className="float-left mx-2 hover:opacity-75"><img src="social/e-reddit.svg" className="reddit" alt=""/></a></Link>
    </div>

    <span className="mr-10 text-white absolute right-0
      h-full w-16 cursor-pointer hover:bg-gray-800 flex"
      onClick={scrollTop}>
      <img src="icons/arrow-up.svg" className="self-center block mx-auto" alt=""/>
    </span>
  </div>
}

export default Footer
