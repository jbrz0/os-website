import Link from 'next/link'

interface Viewport {
  mobile?: boolean
}
const MenuButton: React.FC<Viewport> = ({mobile}) => {

  let viewport: string;
  const sm:string = 'block md:hidden'
  const md:string = 'hidden md:block lg:hidden'

  if (mobile) viewport = sm
  else viewport = md

  return (
    <li className={`bg-gray-700 hover:bg-gray-800 cursor-pointer rounded-sm
      mr-1 flex self-center py-2 px-2 ml-2 ${viewport}`}>
      <Link href="/"><a>
        <img src="icons/menu.svg" alt="Menu" className="w-4" />
      </a></Link>
    </li>
  )
}

export default MenuButton
