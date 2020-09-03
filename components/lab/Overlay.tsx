import Link from 'next/link'

interface Props {
  children: React.ReactNode,
  href: string,
}

const Overlay: React.FC<Props> = (props) => {
  return <>
    <>{props.children}</>

    <Link href={props.href}><a className="fixed z-30">
    <div className="fixed bottom-0 right-0 mr-2 mb-2 lg:mr-12 lg:mb-10
    card-overlay px-2 py-1 shadow-xl bg-gray-1000 hover:opacity-75">

      <div className="float-left px-3"
      style={{borderRight: '1px solid #131033'}}>
        <div className="text-gray-100 text-xs font-bold text-center">VIEW</div>
        <div>
          <img src="/icons/blog-active.svg" className="inline w-3" />
          <img src="/icons/blog-active.svg" className="inline w-3" />
          <img src="/icons/blog-active.svg" className="inline w-3" />
        </div>
        <div className="text-gray-100 text-xs font-bold text-center">POST</div>
      </div>

      <div className="inline-block px-3">
        <div className="text-gray-100 text-xs text-center mb-2">🧪 A Web Experiment 🧪</div>
        <div><img src="/logo.svg" className="w-40" /></div>
      </div>
    </div>
    </a></Link>
  </>
}

export default Overlay
