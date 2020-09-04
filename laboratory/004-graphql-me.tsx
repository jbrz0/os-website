import { useEffect } from "react"

document.getElementsByTagName('body')[0].style.overflow = 'hidden'

function Lab() {

  const p = `http://`

  return <iframe src={`${p}54.81.247.82/playground`} frameBorder="0"
  className="w-full h-screen"></iframe>
}

export default Lab
