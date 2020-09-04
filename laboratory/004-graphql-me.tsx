import { useEffect } from "react"

document.getElementsByTagName('body')[0].style.overflow = 'hidden'

function Lab() {

  return <iframe src={`https://d2ml5pl4d66ya9.cloudfront.net/playground`} frameBorder="0"
  className="w-full h-screen"></iframe>
}

export default Lab
