import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'

interface Content {
  url: string
  icon: string
  title?: string
}

const navItems: Content[] = [
  { url: "/", icon: 'icons/home', title: 'Home' },
  { url: "/projects", icon: 'icons/projects', title: 'Projects' },
  { url: "/labs", icon: 'icons/labs', title: 'Labs' },
  { url: "/blog", icon: 'icons/blog', title: 'Blog' },
  { url: "/shop", icon: 'icons/shop', title: 'Shop' },
]

const btnItems: Content[] = [
  { url: "/profile", icon: 'icons/profile.svg', title: 'Profile' },
  { url: "/cart", icon: 'icons/cart.svg', title: 'Cart' },
  { url: "/chat", icon: 'icons/chat.svg', title: 'Chat' },
  { url: "/mode", icon: 'icons/light.svg', title: 'Light Mode' },
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
  return <nav
    className="bg-gray-900 rounded-sm m-1 p-2 grid grid-cols-12 gap-1">

      <div className="col-span-3 flex self-center">
        <img src="/logo.svg" alt="Odd Scenes Logo" className="w-40" />
      </div>

      <div className="col-span-5">
        <ul className="flex justify-center top-menu">
          {navItems.map(({url, icon, title}, i) =>
            <NavItem title={title} icon={icon} url={url} key={i} />)}
        </ul>
      </div>

      <div className="col-span-4">
        <div className="flex justify-end">
          <ul className="flex justify-between">
            {btnItems.map(({url, icon, title}, i) =>
              <li className="bg-gray-700 hover:bg-gray-800 cursor-pointer
                rounded-sm p-1 mr-1 flex flex-none" key={i}>
                <Link href={url}><a className="self-center">
                  <img src={icon} alt={title} className="flex flex-none w-4" />
                </a></Link>
              </li>
            )}
          </ul>

          <input type="text" placeholder="Search..."
            className="bg-gray-700 rounded-sm py-1
            px-2 text-sm text-gray-100 flex justify-end" />
        </div>
      </div>
  </nav>
}

export default Nav
