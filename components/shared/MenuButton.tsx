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
      flex self-center py-2 px-2 ${viewport}`} onClick={() => setShow(true)}>
      <Link href="/"><a className="w-4">
        <img src="icons/menu.svg" alt="Menu" />
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
              <img src="icons/close.svg" alt="Close Menu"
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
          <Link href="#"><a className="float-left mx-2"><img src="social/reddit.svg" alt=""/></a></Link>
          {/* <Link href="#"><a className="float-left mx-2"><img src="social/twitter.svg" alt=""/></a></Link> */}
          <Link href="#"><a className="float-left mx-2">
          <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.1195 2.50827L20.5343 2.67349L19.8983 3.948C19.5882 4.56953 19.2778 5.19105 18.967 5.81258C18.9302 5.94422 18.8654 6.05962 18.7697 6.20987C18.7296 6.27265 18.5929 6.47236 18.5865 6.48194C18.5504 6.53608 18.5237 6.57878 18.5045 6.61299V9.00152C18.5045 15.1135 12.5895 18.9974 7.00354 18.9974C5.86051 18.9974 4.99207 18.9427 3.99765 18.7257C2.36115 18.3685 1.14327 17.6587 0.585973 16.418L0.0122107 15.1407L1.40659 15.0124C2.66801 14.8964 3.76169 14.6561 4.60159 14.3343C2.29577 13.9635 1.0036 12.9508 1.0036 11.0489V10.0489H2.0036C2.22331 10.0489 2.42143 10.0311 2.59854 9.99834C0.868001 8.96365 0.00122175 7.30379 0.00122175 5.00152C0.00103266 4.9034 0.00103266 4.90339 0.000442551 4.79847C-0.00605857 3.63803 0.0562722 3.01797 0.373948 2.22659C0.577543 1.71941 0.871831 1.24988 1.2679 0.819668L2.02251 0L2.75617 0.838468C5.17394 3.60161 7.56395 5.27795 10.0042 5.48072C10.0146 2.93105 11.9415 1.00152 14.5043 1.00152C15.6991 1.00152 16.7828 1.45501 17.6345 2.27273C18.1006 2.36851 18.5957 2.44709 19.1195 2.50827ZM16.9086 4.16202L16.6021 4.0926L16.3904 3.86028C15.8785 3.29855 15.2359 3.00152 14.5043 3.00152C13.0414 3.00152 12.0041 4.04391 12.0041 5.50152C12.0041 5.73974 11.998 5.88942 11.9683 6.08615C11.8499 6.87116 11.4096 7.50152 10.5041 7.50152C7.50607 7.50152 4.80136 5.89542 2.16389 3.15228C2.02792 3.56561 1.99595 3.99047 2.00041 4.78727C2.00101 4.89384 2.00101 4.89384 2.00122 5.00152C2.00122 7.04953 2.83093 8.16977 4.79547 8.79419L5.49255 9.01575V9.7472C5.49255 10.6342 4.65222 11.4691 3.42268 11.8431C3.98631 12.2708 5.139 12.5015 7.00389 12.5015H8.00389V13.5015C8.00389 14.9343 6.35762 16.0561 3.87075 16.6419C4.68178 16.8903 5.76166 16.9974 7.00354 16.9974C11.618 16.9974 16.5045 13.7888 16.5045 9.00152V6.50152C16.5045 6.20774 16.5897 5.95273 16.7311 5.68759C16.7865 5.58393 16.8474 5.48509 16.9225 5.37237C16.9367 5.35115 16.9892 5.27426 17.0309 5.21279L17.1101 5.05429C17.2386 4.79745 17.3669 4.54061 17.4952 4.28377C17.2958 4.24599 17.1003 4.20541 16.9086 4.16202Z" fill="#FF0081"/>
          </svg>
          </a></Link>

          <Link href="#"><a className="float-left mx-2"><img src="social/github.svg" alt=""/></a></Link>
          <Link href="#"><a className="float-left mx-2"><img src="social/email.svg" alt=""/></a></Link>
        </div>

      </div>

    </div>
    }
    </>
  )
}

export default MenuButton
