import Link from 'next/link'
import { useEffect } from 'react'

interface Item {
  src: string
  alt?: string
}

// const items: Item[] = [
//   { src: '/tech/figma', alt: '' },
//   { src: '/tech/affinity-photo', alt: '' },
//   { src: '/tech/affinity-designer', alt: '' },
//   { src: '/tech/javascript', alt: '' },
//   { src: '/tech/typescript', alt: '' },
//   { src: '/tech/react', alt: '' },
//   { src: '/tech/sass', alt: '' },
//   { src: '/tech/post-css', alt: '' },
//   { src: '/tech/styled-components', alt: '' },
//   { src: '/tech/svg', alt: '' },
//   { src: '/tech/apollo', alt: '' },
//   { src: '/tech/framer-motion', alt: '' },
//   { src: '/tech/d3', alt: '' }, // New row
//   { src: '/tech/mjml', alt: '' },
//   { src: '/tech/nodejs', alt: '' },
//   { src: '/tech/serverless', alt: '' },
//   { src: '/tech/aws', alt: '' },
//   { src: '/tech/lambda', alt: '' },
//   { src: '/tech/express', alt: '' },
//   { src: '/tech/pwa', alt: '' },
//   { src: '/tech/nginx', alt: '' },
//   { src: '/tech/react-native', alt: '' },
//   { src: '/tech/electron', alt: '' },
//   { src: '/tech/bash', alt: '' },
//   { src: '/tech/socketio', alt: '' }, // New row
//   { src: '/tech/eslint', alt: '' },
//   { src: '/tech/sasslint', alt: '' },
//   { src: '/tech/webpack', alt: '' },
//   { src: '/tech/jest', alt: '' },
//   { src: '/tech/lighthouse', alt: '' },
//   { src: '/tech/vscode', alt: '' },
//   { src: '/tech/iterm', alt: '' },
//   { src: '/tech/postgres', alt: '' },
//   { src: '/tech/mongo', alt: '' },
//   { src: '/tech/redis', alt: '' },
//   { src: '/tech/github', alt: '' },
// ]

const items: Item[] = [
  { src: '/tech/v2/1', alt: '' },
  { src: '/tech/v2/2', alt: '' },
  { src: '/tech/v2/3', alt: '' },
  { src: '/tech/v2/4', alt: '' },
  { src: '/tech/v2/5', alt: '' },
  { src: '/tech/v2/6', alt: '' },
  { src: '/tech/v2/7', alt: '' },
  { src: '/tech/v2/8', alt: '' },
  { src: '/tech/v2/9', alt: '' },
  { src: '/tech/v2/10', alt: '' },
  { src: '/tech/v2/11', alt: '' },
  { src: '/tech/v2/12', alt: '' },
  { src: '/tech/v2/13', alt: '' }, // New row
  { src: '/tech/v2/14', alt: '' },
  { src: '/tech/v2/15', alt: '' },
  { src: '/tech/v2/16', alt: '' },
  { src: '/tech/v2/17', alt: '' },
  { src: '/tech/v2/18', alt: '' },
  { src: '/tech/v2/19', alt: '' },
  { src: '/tech/v2/20', alt: '' },
  { src: '/tech/v2/21', alt: '' },
  { src: '/tech/v2/22', alt: '' },
  { src: '/tech/v2/23', alt: '' },
  { src: '/tech/v2/24', alt: '' },
  { src: '/tech/v2/25', alt: '' }, // New row
  { src: '/tech/v2/26', alt: '' },
  { src: '/tech/v2/27', alt: '' },
  { src: '/tech/v2/28', alt: '' },
  { src: '/tech/v2/29', alt: '' },
  { src: '/tech/v2/30', alt: '' },
  { src: '/tech/v2/31', alt: '' },
  { src: '/tech/v2/32', alt: '' },
  { src: '/tech/v2/33', alt: '' },
  { src: '/tech/v2/34', alt: '' },
  { src: '/tech/v2/35', alt: '' },
  { src: '/tech/v2/36', alt: '' },
]

const Tech: React.FC<React.ReactNode> = () => {

  return <div className="py-12 sm:py-20 md:pb-40 md:pt-32 bg-black shadow-2xl">
    <h4 className="text-white text-center text-2xl mb-8 lg:mb-12">Tech &amp; Software</h4>

    <div className="mx-auto px-12 sm:px-6 lg:px-12 xl:px-12 max-w-lg
    lg:max-w-screen-lg grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12
    gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 lg:mb-4 tech-card">


      {items.map((item, i) => <div className="col-span-1 bg-gray-1000 rounded h-16 flex justify-center p-3" key={i}>
        <img src={`${item.src}.svg`} alt={item.alt} />
      </div>)}
    </div>

    {/* <div className="container mx-auto text-sm text-center text-slate-300 mt-10 px-12">
      See how this <Link href="#" className="underline hover:no-underline hover:opacity-75">
        all comes together
      </Link>, or <Link href="#" className="underline hover:no-underline hover:opacity-75">
        individual labs</Link>
    </div> */}

  </div>
}

export default Tech
