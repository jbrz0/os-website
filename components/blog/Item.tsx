import Link from 'next/link'

interface Props {
  Item?: any,
  colour: string,
  href: string,
}

const Item: React.FC<Props> = (props) => {
  return <Link href={props.href}><a className="hover:opacity-75">
    <div className="mb-16">
      <h6 className="text-sm text-gray-200 mb-1">Sep 12, 2021</h6>
      <h2 className="text-3xl text-white mb-3">Effective way to make rapid fast prototypes</h2>
      <p className={`text-md`} style={{color: props.colour}}>Another difficulty with wireframes is that they don’t. Another difficulty with wireframes is that they don’t. Another difficulty.</p>
    </div>
  </a></Link>
}

export default Item

