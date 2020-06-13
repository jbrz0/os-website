import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'

interface Content {
  url: string
  icon: string
  title: string
}

const items: Content[] = [
  { url: "/", icon: 'icons/home', title: 'Home' },
  { url: "/projects", icon: 'icons/projects', title: 'Projects' },
  { url: "/labs", icon: 'icons/labs', title: 'Labs' },
  { url: "/blog", icon: 'icons/blog', title: 'Blog' },
  { url: "/shop", icon: 'icons/shop', title: 'Shop' },
]

const NavItem: React.FC<Content> = ({url, icon, title}) => {
  const router: NextRouter = useRouter()
  const path: string = router.pathname
  const active: boolean = path === url ? true : false

  return <li className="mx-1">
    <Link href={url}>
      <a className="flex items-stretch px-2 text-gray-200 hover:text-gray-100">
        <img src={active ? icon + '-active.svg' : icon + '.svg'}
        className="flex items-stretch pr-2 hover:blue-800" />
        {title}
      </a>
    </Link>
  </li>
}

const Nav: React.FC = () => {

  return <nav
    className="flex items-center justify-between
    flex-wrap bg-gray-900 rounded-sm m-1 p-2">

      <img src="/logo.svg" alt="Odd Scenes Logo" className="w-40 flex" />

      <ul className="flex">
        {items.map(({url, icon, title}, i) =>
          <NavItem title={title} icon={icon} url={url} key={i} />)}
      </ul>

    <input type="text" placeholder="Search..." />
  </nav>
}

export default Nav
