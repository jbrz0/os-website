import Link from 'next/link'

interface Props {
  Item?: any,
  href: string,
  title: string,
  date?: string,
  description: string,

  //? For dynamic excerpt colour
  // color?: string,
}

const Item: React.FC<Props> = (props) => {
  return <Link href={props.href}><a className="hover:opacity-75">
    <div className="mb-16">
      {/* <h6 className="text-sm text-gray-200 mb-1">{props.date}</h6> */}
      <h2 className="text-3xl text-white mb-3">{props.title}</h2>
      <p className={`text-lg`} style={{color: '#546a90'}}>
        {props.description}
      </p>
    </div>
  </a></Link>
}

export default Item
