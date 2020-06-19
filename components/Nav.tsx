import Link from 'next/link'
import ReactTooltip from "react-tooltip"
import {useRouter, NextRouter} from 'next/router'
import MenuButton from './MenuButton'
import {titleCase} from '../helpers/format-text'

interface Content {
  url: string
  icon: string
  title?: string,
  isNew?: boolean,
}

const navItems: Content[] = [
  { url: "/", icon: 'icons/home', title: 'Home' },
  { url: "/projects", icon: 'icons/projects', title: 'Projects' },
  { url: "/labs", icon: 'icons/labs', title: 'Labs' },
  { url: "/blog", icon: 'icons/blog', title: 'Blog' },
  { url: "/shop", icon: 'icons/shop', title: 'Shop' },
]

export const btnItems: Content[] = [
  { url: "/profile", icon: 'icons/profile.svg', title: 'Profile', isNew: false },
  { url: "/cart", icon: 'icons/cart.svg', title: 'Cart', isNew: true },
  { url: "/chat", icon: 'icons/chat.svg', title: 'Chat', isNew: false },
  { url: "/mode", icon: 'icons/light.svg', title: 'Light Mode', isNew: false },
]

const NavItem: React.FC<Content> = ({url, icon, title}) => {
  const router: NextRouter = useRouter()
  const path: string = router.pathname
  const active: boolean = path === url ? true : false

  return <li className="md:mx-2 lg:mx-3 xl:mx-4">
    <Link href={url}>
      <a
        className="flex items-stretch py-1">
        <img src={active ? icon + '-active.svg' : icon + '.svg'}
          className="flex flex-none pr-2 hover:blue-800" />
        <span className="text-gray-200
        hover:text-gray-100 text-sm">{title}</span>
      </a>
    </Link>
  </li>
}

const Nav: React.FC = () => {

  return <div className="fixed w-full">
    <nav className="bg-gray-900 rounded-sm m-1 p-2 grid grid-cols-12 gap-1 shadow-lg">

      <ReactTooltip uuid="tooltip" />

      <div className="sm:col-span-12 md:col-span-5 lg:col-span-3 flex self-center">

        <ul className="flex">
          <MenuButton mobile />
        </ul>

        <Link href="/"><a className="flex flex-none">
          <img src="/logo.svg" alt="Odd Scenes Logo"
            className="w-40 xl:w-40 nav-logo" />
        </a></Link>

        <ul className="absolute right-0 mr-2 md:hidden">
          <li className={`bg-gray-700 hover:bg-gray-800 cursor-pointer
            rounded-sm mr-1 flex self-center py-2 px-2`}>
            <Link href="/"><a className="w-4">
              <img src="icons/search.svg" alt="Menu" className="nav-search" />
            </a></Link>
          </li>
        </ul>

        {/* Optional Badge */}
        {/* <div className="text-white ml-2 hidden md:block
          text-xs bg-blue px-1 rounded-sm nav-badge">
          This is message!
        </div> */}
      </div>

      <div className="hidden md:block md:col-span-7 lg:col-span-5">
        <ul className="flex md:justify-end lg:justify-center top-menu">
          {navItems.map(({url, icon, title}, i) =>
            <NavItem title={title} icon={icon} url={url} key={i} />)}

          <MenuButton />
        </ul>
      </div>

      <div className="hidden lg:block lg:col-span-4">
        <div className="flex justify-end">
          <ul className="flex justify-between">
            {btnItems.map(({url, icon, title, isNew}, i) =>
              <li className="bg-gray-700 hover:bg-gray-800 cursor-pointer
                rounded-sm mr-1 flex flex-none py-1 xl:px-2 lg:px-1" key={i}
                data-tip={titleCase(url.substring(1))}
                data-background-color="#4028fb"
                data-arrow-color="#4028fb">
                <Link href={url}><a className="self-center relative">
                  {isNew && <span className="absolute bg-red w-1 h-1
                    rounded-full right-0 top-0" />}
                  <img src={icon} alt={title} className="flex flex-none w-4" />
                </a></Link>
              </li>
            )}
          </ul>

          <input type="text" placeholder="Search..."
            className="bg-gray-700 rounded-sm py-1
            px-2 text-sm text-gray-100 flex justify-end search-input" />
          <img src="icons/search.svg" alt="Search"
            className="absolute mr-2 mt-2" />
        </div>
      </div>
    </nav>
  </div>
}

export default Nav
