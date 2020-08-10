import {useState, useEffect} from 'react'
import Link from 'next/link'
import {btnItems, mobileMenu} from './Nav'
import {useKeyPress} from '../../hooks/useKeyPress'

interface Viewport {
  mobile?: boolean
}
const MenuButton: React.FC<Viewport> = ({mobile}) => {

  let viewport: string;
  const sm:string = 'block md:hidden'
  const md:string = 'hidden md:block lg:hidden ml-2'

  if (mobile) viewport = sm
  else viewport = md

  const [show, setShow] = useState<boolean>(false)

  // On Escape key press, close menu
  const escPress = useKeyPress('Escape')
  useEffect(() => {
    if (show) setShow(false)
  }, [escPress])

  // Remove body scroll if menu is open
  useEffect(() => {
    if (show) window.document.body.style.overflow = "hidden"
    if (!show) window.document.body.style.overflow = "auto"
  }, [show])

  return (<>
    <li className={`bg-gray-700 hover:bg-gray-800 cursor-pointer rounded-sm
      flex self-center py-2 px-2 ${viewport}`} onClick={() => setShow(!show)}>
      <Link href="/"><a className="w-4">
        <img src="/icons/menu.svg" alt="Menu" />
      </a></Link>
    </li>

    {(show && viewport === md) &&
      <div className="text-white">TABLET MENU</div>
    }

    {(show && viewport === sm) &&
      <div className="fixed left-0 right-0 top-0 w-full h-full
        z-10 bg-gray-900">


      <div className="fixed w-full">
        <div className="m-5">
          <ul className="flex justify-between">
            <li className="w-12 h-12 flex justify-center">
              <img src="/icons/close.svg" alt="Close Menu"
                onClick={() => setShow(false)}
                className="w-10 cursor-pointer" />
            </li>
            {btnItems.map(({url, icon, title}, i) => <li
              className="w-12 h-12 flex justify-center" key={i}>
              <img src={icon}className="w-6" /></li>)}
          </ul>
        </div>
      </div>

      <div className="h-full flex items-center">
        <div className="ml-8 pt-6 pb-2">
        {mobileMenu.map(({url, icon, title}, i) => <span key={i}>
          <Link href={url}><a>
            <div className="menu-text text-4xl text-white mb-6 hover:opacity-85">{title}</div>
          </a></Link>
          </span>
        )}
        </div>
      </div>

      <div className="fixed w-full bottom-0 bg-gray-800 py-3 flex justify-center">
        <div className="max-w-md">
          <Link href="#"><a className="float-left mx-2"><img src="social/a-email.svg" alt=""/></a></Link>
          <Link href="#"><a className="float-left mx-2"><img src="social/b-twitter.svg" alt=""/></a></Link>
          <Link href="#"><a className="float-left mx-2"><img src="social/c-github.svg" alt=""/></a></Link>
          <Link href="#"><a className="float-left mx-2"><img src="social/d-behance.svg" className="behance" alt=""/></a></Link>
          <Link href="#"><a className="float-left mx-2"><img src="social/e-reddit.svg" className="reddit" alt=""/></a></Link>
        </div>
      </div>

    </div>
    }
    </>
  )
}

export default MenuButton
